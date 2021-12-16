import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { QuestionNumService } from './questionNum.service';
import { CreateQuestionNumDto } from './dto/create-questionNum.dto';
import { UpdateQuestionNumDto } from './dto/update-questionNum.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionNumFilterOption } from 'src/core/filter/filter';

@Controller('question-num')
export class QuestionNumController extends BaseController<CreateQuestionNumDto, UpdateQuestionNumDto, QuestionNumFilterOption> {

  constructor(
    public service: QuestionNumService,
  ) {
    super(service);
  }
}
