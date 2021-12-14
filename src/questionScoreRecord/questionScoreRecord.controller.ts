import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { QuestionScoreRecordService } from './questionScoreRecord.service';
import { CreateQuestionScoreRecordDto } from './dto/create-questionScoreRecord.dto';
import { UpdateQuestionScoreRecordDto } from './dto/update-questionScoreRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionScoreRecordFilterOption } from 'src/core/filter/filter';
import { ReqUser } from 'src/core/decorator/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { Lang } from 'src/core/decorator/lang.decorator';
import { LANGUAGE } from 'src/constant/constant';
import utilsFunction from 'src/utils/utilsFunction/utilsFunction';
import { UserService } from 'src/user/user.service';
import { PersonalityService } from 'src/personality/personality.service';

@Controller('question-score-record')
export class QuestionScoreRecordController extends BaseController<CreateQuestionScoreRecordDto, UpdateQuestionScoreRecordDto, QuestionScoreRecordFilterOption> {

  constructor(
    public service: QuestionScoreRecordService,
    public userService: UserService,
    public personalityService: PersonalityService,
  ) {
    super(service);
  }

  @Post()
  async create(@ReqUser() user: User, @Body() createDto: CreateQuestionScoreRecordDto, @Lang() lang: LANGUAGE) {
    utilsFunction.checkReadOnly(this.readOnly, user);
    const createResult = await this.service.create(createDto, user);
    const questionScoreRecords = await this.service.findAllWithoutPagination({userId: createDto.toUserId});
    const personalities = await this.personalityService.findAllWithoutFilter();
    await this.userService.updatePersonalityScore(user, questionScoreRecords, personalities);
    // send notification to user?
    return createResult;
  }

}
