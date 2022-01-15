import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { SubmitQuestionRecordService } from './submitQuestionRecord.service';
import { CreateSubmitQuestionRecordDto, CreateWithChoiceRecord } from './dto/create-submitQuestionRecord.dto';
import { UpdateSubmitQuestionRecordDto } from './dto/update-submitQuestionRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { SubmitQuestionRecordFilterOption } from 'src/core/filter/filter';
import { ReqUser } from 'src/core/decorator/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { Lang } from 'src/core/decorator/lang.decorator';
import { LANGUAGE } from 'src/constant/constant';
import { QuestionChoiceRecordService } from 'src/questionChoiceRecord/questionChoiceRecord.service';
import { QuestionChoiceRecord } from 'src/questionChoiceRecord/entities/questionChoiceRecord.entity';
import { UserService } from 'src/user/user.service';
import { SubmitQuestionRecord } from './entities/submitQuestionRecord.entity';

@Controller('submit-question-record')
export class SubmitQuestionRecordController extends BaseController<CreateSubmitQuestionRecordDto, UpdateSubmitQuestionRecordDto, SubmitQuestionRecordFilterOption> {

  constructor(
    public service: SubmitQuestionRecordService,
    public questionChoiceRecordService: QuestionChoiceRecordService,
    public userService: UserService,
  ) {
    super(service);
    this.findOneCheckUser = false;
    this.findAllCheckUser = true;
  }

  @Post("create-with-choice-record")
  async createWithChoiceRecord(@ReqUser() user: User, @Body() createDto: CreateWithChoiceRecord, @Lang() lang: LANGUAGE) {
    const {questionChoiceRecords} = createDto;
    const createChoiceRecords: QuestionChoiceRecord[] = await Promise.all(questionChoiceRecords.map(async (questionChoiceRecord) => {
      return await this.questionChoiceRecordService.create({...questionChoiceRecord}, user);
    }));
    const questionChoiceRecordIds = createChoiceRecords.map((questionChoiceRecord) => questionChoiceRecord.id);
    const result: SubmitQuestionRecord = await this.service.create({questionChoiceRecordIds}, user);
    await this.userService.update(user.id, {lastSubmitQuestionRecordDate: result.createdAt});
    return result;
  }

  @Get("get-user-last/:userId")
  async getUserLast(@ReqUser() user: User, @Param("userId") userId: string, @Lang() lang: LANGUAGE) {
    const submitQuestionRecord = await this.service.getLastByUserId(userId);
    return submitQuestionRecord;
  }
}
