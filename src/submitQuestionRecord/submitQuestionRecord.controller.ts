import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { SubmitQuestionRecordService } from './submitQuestionRecord.service';
import { CreateSubmitQuestionRecordDto } from './dto/create-submitQuestionRecord.dto';
import { UpdateSubmitQuestionRecordDto } from './dto/update-submitQuestionRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { SubmitQuestionRecordFilterOption } from 'src/core/filter/filter';

@Controller('submit-question-record')
export class SubmitQuestionRecordController extends BaseController<CreateSubmitQuestionRecordDto, UpdateSubmitQuestionRecordDto, SubmitQuestionRecordFilterOption> {

  constructor(
    public service: SubmitQuestionRecordService,
  ) {
    super(service);
  }
}
