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
import { Filter } from 'src/core/decorator/filter.decorator';
import { Sort } from 'src/core/decorator/sort.decorator';
import { Search, SearchOption } from 'src/core/decorator/search.decorator';
import utilsFunction from 'src/utils/utilsFunction/utilsFunction';
import { SubmitQuestionScoreRecord } from 'src/submitQuestionScoreRecord/entities/submitQuestionScoreRecord.entity';
import { SubmitQuestionScoreRecordService } from 'src/submitQuestionScoreRecord/submitQuestionScoreRecord.service';
import matchHelper from 'src/match/helper/helper';

@Controller('submit-question-record')
export class SubmitQuestionRecordController extends BaseController<CreateSubmitQuestionRecordDto, UpdateSubmitQuestionRecordDto, SubmitQuestionRecordFilterOption> {

  constructor(
    public service: SubmitQuestionRecordService,
    public questionChoiceRecordService: QuestionChoiceRecordService,
    public userService: UserService,
    public submitQuestionScoreRecordService: SubmitQuestionScoreRecordService,
  ) {
    super(service);
    this.findOneCheckUser = false;
    this.findAllCheckUser = false;
  }

  @Get('get/all')
  async findAllWithoutPagination(@ReqUser() user: User, @Filter() filter: SubmitQuestionRecordFilterOption, @Sort() sort: any = {}, @Search() search: SearchOption = {searchFilter: {}}) {
    const {searchFilter} = search;
    filter = {...filter, ...searchFilter};
    const isSelf = utilsFunction.compareId(filter["userId"], user.id);
    const submitQuestionRecords: SubmitQuestionRecord[] = await this.service.findAllWithoutPagination(filter, utilsFunction.getCheckUser(this.findAllCheckUser, user), sort);
    if (isSelf) {return submitQuestionRecords; }

    const data = await Promise.all(submitQuestionRecords.map(async (submitQuestionRecord) => {
      const submitQuestionScoreRecord: SubmitQuestionScoreRecord = await this.submitQuestionScoreRecordService.findOneWithFilter({submitQuestionRecordId: submitQuestionRecord.id, userId: user.id});
      if (!submitQuestionScoreRecord) {return submitQuestionRecord; }

      const useData: any = JSON.parse(JSON.stringify(submitQuestionRecord));
      useData.submitQuestionScoreRecord = {
        id: submitQuestionScoreRecord.id,
        createdAt: submitQuestionScoreRecord.createdAt,
      };
      return useData;
    }));

    return data;

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

  @Get("get/statistic/:id")
  async getStatistic(@ReqUser() user: User, @Param("id") id: string, @Query() query: any, @Lang() lang: LANGUAGE) {
    const submitQuestionScoreRecords: SubmitQuestionScoreRecord[] = await this.submitQuestionScoreRecordService.findAllWithoutPagination({submitQuestionRecordId: id});
    const statisticData = matchHelper.getSubmitQuestionScoreRecordStatistic(submitQuestionScoreRecords);
    const max = matchHelper.getLargestInStatisticData(statisticData);
    return {statisticData, max};
  }
}
