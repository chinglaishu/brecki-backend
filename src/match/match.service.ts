import { Injectable } from '@nestjs/common';
import { AddChatDataRecordDto, CreateMatchDto } from './dto/create-match.dto';
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
import { User } from 'src/user/entities/user.entity';
import matchHelper from './helper/helper';

@Injectable()
export class MatchService extends BaseService<CreateMatchDto, UpdateMatchDto, MatchFilterOption> {
  constructor(
    @InjectModel(Match.name) public model: Model<MatchDocument>,
  ) {
    super(model);
    this.populates = ["users"];
  }

  async addChatDataRecord(user: User, match: Match, body: AddChatDataRecordDto) {
    const {chatDataRecords} = match;
    const useChatDataRecords = JSON.parse(JSON.stringify(chatDataRecords));
    const chatDataRecord = matchHelper.getUseChatData(useChatDataRecords, user);
    matchHelper.addChatDataToRecord(chatDataRecord, body);
    const intimacy = matchHelper.calculateIntimacy(useChatDataRecords);
    return await this.update(match.id, {chatDataRecords: useChatDataRecords, intimacy});
  }

}
