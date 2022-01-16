import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { SystemMatchService } from './systemMatch.service';
import { CreateSystemMatchDto } from './dto/create-systemMatch.dto';
import { UpdateSystemMatchDto } from './dto/update-systemMatch.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { SystemMatchFilterOption } from 'src/core/filter/filter';
import { ReqUser } from 'src/core/decorator/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { SystemMatch } from './entities/systemMatch.entity';
import systemMatchHelper from './helper/helper';
import { LANGUAGE, MATCH_METHOD_NUM, SYSTEM_MATCH_NUM, SYSTEM_MATCH_VALID_AFTER_MINS } from 'src/constant/constant';
import * as moment from "moment-timezone";
import { Lang } from 'src/core/decorator/lang.decorator';
import { sendPushNotificationByUserId } from 'src/core/notification/notification';
import utilsFunction from 'src/utils/utilsFunction/utilsFunction';
import { MatchService } from 'src/match/match.service';

@Controller('system-match')
export class SystemMatchController extends BaseController<CreateSystemMatchDto, UpdateSystemMatchDto, SystemMatchFilterOption> {

  constructor(
    public service: SystemMatchService,
    public userService: UserService,
    public matchService: MatchService,
  ) {
    super(service);
    this.findOneCheckUser = true;
    this.findAllCheckUser = true;
  }

  @Get("request")
  async requestSystemMatch(@ReqUser() user: User, @Query() query: any) {
    const {withPreference} = query;

    const systemMatch: SystemMatch = await this.service.findOneWithFilter({userId: user.id});
    
    if (systemMatch) {
      systemMatchHelper.checkTime(systemMatch.updatedAt, SYSTEM_MATCH_VALID_AFTER_MINS);
    }

    const users: User[] = await this.userService.getRandomWithPerference(user, withPreference, SYSTEM_MATCH_NUM, false);
    const matchUserIds = users.map((user) => user.id);

    if (!systemMatch) {
      return await this.service.create({matchUserIds}, user);
    }
    return await this.service.update(systemMatch.id, {matchUserIds, updatedAt: moment().toDate()}, true, user);
  }

  @Get("self")
  async getSelfSystemMatch(@ReqUser() user: User) {
    const systemMatch: SystemMatch = await this.service.findOneWithFilter({userId: user.id});
    return systemMatch;
  }

  @Post("create-match/:toUserId")
  async createMatch(@ReqUser() user: User, @Param("toUserId") toUserId: string, @Query() query: any, @Lang() lang: LANGUAGE) {
    const systemMatch: SystemMatch = await this.service.findOneWithFilter({userId: user.id}, null, true);
    const {matchUserIds} = systemMatch;
    const useMatchUserIds = utilsFunction.getRemovedItemArray(matchUserIds, toUserId);
    const result = await this.service.update(systemMatch.id, {matchUserIds: useMatchUserIds});
    await this.matchService.create({userIds: [user.id, toUserId], method: MATCH_METHOD_NUM.SYSTEM});
    return result;
  }

  // @Post("cross-user/:toUserId")
  // async crossUser(@ReqUser() user: User, @Param("toUserId") toUserId: string, @Lang() lang: LANGUAGE) {
  //   const systemMatch: SystemMatch = await this.service.findOneWithFilter({userId: user.id}, null, true);
  //   const {matchUserIds} = systemMatch;
  //   const useMatchUserIds = utilsFunction.getRemovedItemArray(matchUserIds, toUserId);
  //   const result = await this.service.update(systemMatch.id, {matchUserIds: useMatchUserIds});
  //   return result;
  // }
}
