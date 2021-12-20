import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { QuestionChoiceRecordService } from './questionChoiceRecord.service';
import { CreateQuestionChoiceRecordDto } from './dto/create-questionChoiceRecord.dto';
import { UpdateQuestionChoiceRecordDto } from './dto/update-questionChoiceRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionChoiceRecordFilterOption } from 'src/core/filter/filter';

@Controller('question-choice-record')
export class QuestionChoiceRecordController extends BaseController<CreateQuestionChoiceRecordDto, UpdateQuestionChoiceRecordDto, QuestionChoiceRecordFilterOption> {

  constructor(
    public service: QuestionChoiceRecordService,
  ) {
    super(service);
    this.findOneCheckUser = true;
    this.findAllCheckUser = true;
  }
}
