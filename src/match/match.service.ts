import { Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { BaseService } from "../utils/base/base.service";
import { Match, MatchDocument } from './entities/match.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MatchFilterOption } from 'src/core/filter/filter';
import { MATCH_METHOD_NUM, MATCH_STATUS_NUM } from 'src/constant/constant';
import { sendPushNotificationByUserId } from 'src/core/notification/notification';
import { NM } from 'src/constant/notificationMessage';
import { UserService } from 'src/user/user.service';
import systemMatchHelper from 'src/systemMatch/helper/helper';

@Injectable()
export class MatchService extends BaseService<CreateMatchDto, UpdateMatchDto, MatchFilterOption> {
  constructor(
    @InjectModel(Match.name) public model: Model<MatchDocument>,
  ) {
    super(model);
    this.createAddUserId = true;
  }

  async getAllOthersLike(toUserId: string) {
    const field = systemMatchHelper.getMatchUserPersonalInfoField();
    const results = await this.findAllWithoutPagination({toUserId, status: MATCH_STATUS_NUM.WAITING}, null);
    if (!results) {return results; }
    for (let i = 0 ; i < results.length ; i++) {
      results[i] = await results[i].populate("user", field).populate("submitQuestionScoreRecord").execPopulate();
    }
  }

  async getAllSelfLike(userId: string) {
    const field = systemMatchHelper.getMatchUserPersonalInfoField();
    const results = await this.findAllWithoutPagination({userId, status: MATCH_STATUS_NUM.WAITING}, null);
    if (!results) {return results; }
    for (let i = 0 ; i < results.length ; i++) {
      results[i] = await results[i].populate("toUser", field).populate("submitQuestionScoreRecord").execPopulate();
    }
  }

  async likeUser(userId: string, toUserId: string, method: MATCH_METHOD_NUM, userService: UserService, submitQuestionScoreRecordId?: string) {
    const result = await this.create({userId, toUserId, method, submitQuestionScoreRecordId});
    await sendPushNotificationByUserId(toUserId, userService, "SOME_ONE_LIKE_YOU");
    return result;
  }

  async crossUser(userId: string, toUserId: string, method: MATCH_METHOD_NUM, userService: UserService) {
    const result = await this.create({userId, toUserId, method, status: MATCH_STATUS_NUM.CROSS});
    return result;
  }
}
