import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { QuestionScoreRecordService } from './questionScoreRecord.service';
import { CreateQuestionScoreRecordDto } from './dto/create-questionScoreRecord.dto';
import { UpdateQuestionScoreRecordDto } from './dto/update-questionScoreRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionScoreRecordFilterOption } from 'src/core/filter/filter';

@Controller('question-score-record')
export class QuestionScoreRecordController extends BaseController<CreateQuestionScoreRecordDto, UpdateQuestionScoreRecordDto, QuestionScoreRecordFilterOption> {

  constructor(
    public service: QuestionScoreRecordService,
  ) {
    super(service);
  }
}
