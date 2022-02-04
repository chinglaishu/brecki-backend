import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from "../utils/base/base.service";
import { User, UserDocument } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import crypt from 'src/utils/utilsFunction/crypt';
import { UserFilterOption } from 'src/core/filter/filter';
import { FRIEND_STATUS_NUM, NOTIFICATION_TYPE, ROLE_NUM } from '../constant/constant';
import userHelper from './helper/helper';
import { Friend } from 'src/utils/base/base.entity';
import * as moment from "moment-timezone";
import { ApplicationException } from 'src/core/exception/exception.model';
import { AppErrorCode } from 'src/core/exception/exceptioncode.enum';
import * as uuid from "uuid";
import {generateDigitNumber} from "../auth/helper/helper";
import { QuestionScoreRecord } from 'src/questionScoreRecord/entities/questionScoreRecord.entity';
import { Personality } from 'src/personality/entities/personality.entity';
import personalityHelper from 'src/personality/helper/helper';
import { Match, MatchDocument } from 'src/match/entities/match.entity';
import { SystemMatch, SystemMatchDocument } from 'src/systemMatch/entities/systemMatch.entity';
import { ManualMatch, ManualMatchDocument } from 'src/manualMatch/entities/manualMatch.entity';
import utilsFunction from 'src/utils/utilsFunction/utilsFunction';

@Injectable()
export class UserService extends BaseService<CreateUserDto, UpdateUserDto, UserFilterOption> {
  constructor(
    @InjectModel(User.name) public model: Model<UserDocument>,
    @InjectModel(Match.name) public matchModel: Model<MatchDocument>,
    @InjectModel(SystemMatch.name) public systemMatchModel: Model<SystemMatchDocument>,
    @InjectModel(ManualMatch.name) public manualMatchModel: Model<ManualMatchDocument>,
  ) {
    super(model);
  }

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.password) {
      createUserDto.password = await crypt.hashPassword(createUserDto.password);
    }
    const id = uuid.v4();
    const firebaseEmail = `${id}@gmail.com`;
    const firebasePassword = generateDigitNumber(8);
    createUserDto = {...createUserDto, id, firebaseEmail, firebasePassword}; 

    return await this.model.create(createUserDto);
  }

  async checkIsIdOfUser(user: User, id: string) {
    if (user.id !== id && user.roleNum !== ROLE_NUM.ADMIN) {
      throw new HttpException("user do not own this user id", 500);
    }
    return true;
  }

  async addUserToFriendList(user: User, friendUserId: string) {
    const {friends} = user;
    if (userHelper.checkUserIdInFriendList(friends, friendUserId)) {
      // throw new HttpException("already in friend list", 500);
      return user;
    }
    const friend: Friend = {
      friendId: friendUserId,
      status: FRIEND_STATUS_NUM.normal,
      intimacy: 0,
      startFriendDate: moment().toDate(),
    };
    friends.push(friend);
    return await this.update(user.id, {friends}, true);
  }

  // not really remove, but change status
  async removeUserFromFriendList(user: User, friendUserId: string) {
    const {friends} = user;
    if (!userHelper.checkUserIdInFriendList(friends, friendUserId)) {return user; }
  }

  async getRandomWithPerference(user: User, withPreference: boolean, size: number, isManual: boolean) {
    let filter = (withPreference) ? userHelper.getFilterByPerference(user) : {};
    const userIds = await this.getUserIdsFromMatch(user, isManual);
    console.log(userIds);
    filter = {...filter, personalInfo: {$ne: null}, _id: {$nin: userIds}};
    const result = await this.getRandom(size, filter);
    return result;
  }

  async updatePersonalityScore(user: User, questionScoreRecords: QuestionScoreRecord[]) {
    if (questionScoreRecords.length === 0) {
      throw new HttpException("Question score record length can not be 0", 500);
    }
    const useScore = questionScoreRecords[questionScoreRecords.length - 1].personalityScore;
    const newPersonalityScore = personalityHelper.getNewScore(user, useScore);
    const useNum = user.personalityScoreNum || 0;
    const result = await this.update(user.id, {personalityScore: newPersonalityScore, personalityScoreNum: useNum + 1});
    return result;
  }

  async getUserIdsFromMatch(user: User, isManual: boolean) {
    const matchs: Match[] = await this.matchModel.find({userIds: {$eq: user.id}});
    const manualMatch: ManualMatch = await this.manualMatchModel.findOne({userId: user.id});
    const systemMatch: SystemMatch = await this.systemMatchModel.findOne({userId: user.id});
    const matchUserIds = matchs.map((match) => {
      const {userIds} = match;
      for (let i = 0 ; i < userIds.length ; i++) {
        if (!utilsFunction.compareId(userIds[i], user.id)) {
          return userIds[i];
        }
      }
      return null;
    });
    const manualMatchUserIds = manualMatch?.matchUserIds || [];
    const systemMatchUserIds = systemMatch?.matchUserIds || [];

    const userIds = [...manualMatchUserIds, ...systemMatchUserIds, ...matchUserIds, user.id];
    return [...new Set(userIds)];
  }

}
