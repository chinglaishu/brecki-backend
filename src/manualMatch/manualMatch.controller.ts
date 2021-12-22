import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ManualMatchService } from './manualMatch.service';
import { CreateManualMatchDto } from './dto/create-manualMatch.dto';
import { UpdateManualMatchDto } from './dto/update-manualMatch.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { ManualMatchFilterOption } from 'src/core/filter/filter';
import { ReqUser } from 'src/core/decorator/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { LANGUAGE, MANUAL_MATCH_NUM, MANUAL_MATCH_VALID_AFTER_MINS, MATCH_METHOD_NUM } from 'src/constant/constant';
import systemMatchHelper from 'src/systemMatch/helper/helper';
import { ManualMatch } from './entities/manualMatch.entity';
import { UserService } from 'src/user/user.service';
import * as moment from "moment-timezone";
import utilsFunction from 'src/utils/utilsFunction/utilsFunction';
import { Lang } from 'src/core/decorator/lang.decorator';
import { MatchService } from 'src/match/match.service';

@Controller('manual-match')
export class ManualMatchController extends BaseController<CreateManualMatchDto, UpdateManualMatchDto, ManualMatchFilterOption> {

  constructor(
    public service: ManualMatchService,
    public userService: UserService,
    public matchService: MatchService,
  ) {
    super(service);
    this.findOneCheckUser = true;
    this.findAllCheckUser = true;
  }

  @Get("request")
  async requestManualMatch(@ReqUser() user: User, @Query() query: any) {
    const {withPreference} = query;

    const manualMatch: ManualMatch = await this.service.findOneWithFilter({userId: user.id});

    if (manualMatch) {
      systemMatchHelper.checkTime(manualMatch.updatedAt, MANUAL_MATCH_VALID_AFTER_MINS);
    }

    const users: User[] = await this.userService.getRandomWithPerference(user, withPreference, MANUAL_MATCH_NUM);
    const matchUserIds = users.map((user) => user.id);

    if (!manualMatch) {
      return await this.service.create({matchUserIds}, user);
    }
    return await this.service.update(manualMatch.id, {matchUserIds, updatedAt: moment().toDate()}, true, user);
  }

  @Get("self")
  async getSelfManualMatch(@ReqUser() user: User) {
    const manualMatch: ManualMatch = await this.service.findOneWithFilter({userId: user.id});
    return manualMatch;
  }

  @Post("like-user/:toUserId")
  async likeUser(@ReqUser() user: User, @Param("toUserId") toUserId: string, @Lang() lang: LANGUAGE) {
    const manualMatch: ManualMatch = await this.service.findOneWithFilter({userId: user.id}, null, true);
    const {matchUserIds} = manualMatch;
    const useMatchUserIds = utilsFunction.getRemovedItemArray(matchUserIds, toUserId);
    const result = await this.service.update(manualMatch.id, {matchUserIds: useMatchUserIds});
    await this.matchService.likeUser(user.id, toUserId, MATCH_METHOD_NUM.MANUAL, this.userService);
    return result;
  }

  @Post("cross-user/:toUserId")
  async crossUser(@ReqUser() user: User, @Param("toUserId") toUserId: string, @Lang() lang: LANGUAGE) {
    const manualMatch: ManualMatch = await this.service.findOneWithFilter({userId: user.id}, null, true);
    const {matchUserIds} = manualMatch;
    const useMatchUserIds = utilsFunction.getRemovedItemArray(matchUserIds, toUserId);
    const result = await this.service.update(manualMatch.id, {matchUserIds: useMatchUserIds});
    await this.matchService.crossUser(user.id, toUserId, MATCH_METHOD_NUM.MANUAL, this.userService);
    return result;
  }
}
