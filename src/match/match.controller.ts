import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, HttpException } from '@nestjs/common';
import { MatchService } from './match.service';
import { AddChatDataRecordDto, CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { MatchFilterOption } from 'src/core/filter/filter';
import { ReqUser } from 'src/core/decorator/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { Lang } from 'src/core/decorator/lang.decorator';
import { LANGUAGE, MATCH_METHOD_NUM, MATCH_STATUS_NUM, ROLE_NUM } from 'src/constant/constant';
import { UserService } from 'src/user/user.service';
import { Match } from './entities/match.entity';
import { sendPushNotification, sendPushNotificationByUserId } from 'src/core/notification/notification';
import { NM } from 'src/constant/notificationMessage';
import matchHelper from './helper/helper';

@Controller('match')
export class MatchController extends BaseController<CreateMatchDto, UpdateMatchDto, MatchFilterOption> {

  constructor(
    public service: MatchService,
    public userService: UserService,
  ) {
    super(service);
    this.findOneCheckUser = false;
    this.findAllCheckUser = false;
    this.updateCheckUser = false;
  }

  // @Post()
  // async create(@ReqUser() user: User, @Body() createMatchDto: CreateMatchDto, @Lang() lang: LANGUAGE) {
  //   if (user.roleNum !== ROLE_NUM.ADMIN || !createMatchDto.userId) {
  //     createMatchDto.userId = user.id;
  //   }
  //   const {userId, toUserId} = createMatchDto;
  //   await this.service.countAndError({userId, toUserId});
  //   return this.service.create(createMatchDto);
  // }

  // @Put(':id')
  // async update(@ReqUser() user: User, @Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto, @Lang() lang: LANGUAGE) {
  //   const {status} = updateMatchDto;
  //   const match: Match = await this.service.findOne(id, true, user);
  //   const {userId, toUserId} = match;
  //   if (status === MATCH_STATUS_NUM.ACCEPTED) {
  //     const fromUser = await this.userService.findOne(userId, true);
  //     const toUser = await this.userService.findOne(toUserId, true);
  //     await this.userService.addUserToFriendList(fromUser, toUserId);
  //     await this.userService.addUserToFriendList(toUser, userId);
  //   }
  //   return await this.service.update(id, updateMatchDto, true, user);
  // }

  @Post("block-match/:id")
  async blockMatch(@ReqUser() user: User, @Param("id") id: string, @Lang() lang: LANGUAGE) {
    const match: Match = await this.service.findOne(id);
    if (!(match.userIds.includes(user.id)) && user.roleNum !== ROLE_NUM.ADMIN) {throw new HttpException("User do not have permission", 500); }
    const isAlreadyBlocked = match.blockedIds.includes(user.id);
    if (isAlreadyBlocked) {
      throw new HttpException("Already blocked", 500);
    }
    const result: Match = await this.service.update(id, {status: MATCH_STATUS_NUM.SOMEONE_BLOCK, blockedIds: [...match.blockedIds, user.id]}, true);
    return result;
  }

  @Post("unblock-match/:id")
  async unblockMatch(@ReqUser() user: User, @Param("id") id: string, @Lang() lang: LANGUAGE) {
    const match: Match = await this.service.findOne(id);
    if (!(match.userIds.includes(user.id)) && user.roleNum !== ROLE_NUM.ADMIN) {throw new HttpException("User do not have permission", 500); }
    const index = match.blockedIds.indexOf(user.id);
    if (match.status !== MATCH_STATUS_NUM.SOMEONE_BLOCK || index === -1) {
      throw new HttpException("Status Error, not blocked", 500);
    }
    const newBlockedIds = JSON.parse(JSON.stringify(match.blockedIds));
    newBlockedIds.splice(index, 1);
    const useStatus = newBlockedIds.length === 0 ? MATCH_STATUS_NUM.NORMAL : MATCH_STATUS_NUM.SOMEONE_BLOCK;
    const result: Match = await this.service.update(id, {status: useStatus, blockedIds: newBlockedIds}, true);
    return result;
  }

  @Post("quit-match/:id")
  async quitMatch(@ReqUser() user: User, @Param("id") id: string, @Lang() lang: LANGUAGE) {
    const match: Match = await this.service.findOne(id);
    if (!(match.userIds.includes(user.id)) && user.roleNum !== ROLE_NUM.ADMIN) {throw new HttpException("User do not have permission", 500); }
    const isAlreadyQuited = match.quitedIds.includes(user.id);
    if (isAlreadyQuited) {
      throw new HttpException("Already Quited", 500);
    }
    const result: Match = await this.service.update(id, {status: MATCH_STATUS_NUM.SOMEONE_QUIT, quitedIds: [...match.quitedIds, user.id]}, true);
    return result;
  }

  @Post("add-chat-data-record/:id")
  async addChatDataRecord(@ReqUser() user: User, @Param("id") id: string, @Body() body: AddChatDataRecordDto, @Lang() lang: LANGUAGE) {
    const match: Match = await this.service.findOne(id);
    if (!(match.userIds.includes(user.id)) && user.roleNum !== ROLE_NUM.ADMIN) {throw new HttpException("User do not have permission", 500); }
    const result: Match = await this.service.addChatDataRecord(user, match, body);
    return result;
  }

  @Get("get/statistic")
  async getStatistic(@ReqUser() user: User, @Param("id") id: string, @Lang() lang: LANGUAGE) {
    const matchs: Match[] = await this.service.findAllWithoutPagination({userIds: {$in: [user.id]} });
    const statisticData = matchHelper.getMatchStatistic(matchs, user.id);
    const max = matchHelper.getLargestInStatisticData(statisticData);
    return {statisticData, max};
  }
}
