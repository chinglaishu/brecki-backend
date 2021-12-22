import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, HttpException } from '@nestjs/common';
import { SubmitQuestionScoreRecordService } from './submitQuestionScoreRecord.service';
import { CreateSubmitQuestionScoreRecordDto, CreateWithScoreRecordDto } from './dto/create-submitQuestionScoreRecord.dto';
import { UpdateSubmitQuestionScoreRecordDto } from './dto/update-submitQuestionScoreRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { SubmitQuestionScoreRecordFilterOption } from 'src/core/filter/filter';
import { ReqUser } from 'src/core/decorator/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { Lang } from 'src/core/decorator/lang.decorator';
import { LANGUAGE } from 'src/constant/constant';
import { QuestionScoreRecordService } from 'src/questionScoreRecord/questionScoreRecord.service';
import { SubmitQuestionScoreRecord } from './entities/submitQuestionScoreRecord.entity';
import { PersonalityService } from 'src/personality/personality.service';
import { UserService } from 'src/user/user.service';

@Controller('submit-question-score-record')
export class SubmitQuestionScoreRecordController extends BaseController<CreateSubmitQuestionScoreRecordDto, UpdateSubmitQuestionScoreRecordDto, SubmitQuestionScoreRecordFilterOption> {

  constructor(
    public service: SubmitQuestionScoreRecordService,
    public questionScoreRecordService: QuestionScoreRecordService,
    public personalityService: PersonalityService,
    public userService: UserService,
  ) {
    super(service);
    this.findOneCheckUser = true;
    this.findAllCheckUser = true;
    this.updateCheckUser = true;
  }

  @Post("create-with-score-record")
  async createWithScoreRecord(@ReqUser() user: User, @Body() createDto: CreateWithScoreRecordDto, @Lang() lang: LANGUAGE) {
    const {questionScoreRecords, toUserId, submitQuestionRecordId } = createDto;
    if (questionScoreRecords.length === 0) {
      throw new HttpException("Question Score Record can not be empty", 500);
    }
    const toUser = await this.userService.findOne(toUserId, true);
    const questionScoreRecordIds: string[] = await Promise.all(questionScoreRecords.map(async (questionChoiceRecord) => {
      return await this.questionScoreRecordService.create({...questionChoiceRecord}, user);
    }));
    const result: SubmitQuestionScoreRecord = await this.service.create({questionScoreRecordIds, toUserId, submitQuestionRecordId}, user);
    await this.userService.updatePersonalityScore(toUser, questionScoreRecords);
    return result;
  }

}
