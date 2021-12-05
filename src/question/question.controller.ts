import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionFilterOption } from 'src/core/filter/filter';

@Controller('question')
export class QuestionController extends BaseController<CreateQuestionDto, UpdateQuestionDto, QuestionFilterOption> {

  constructor(
    public service: QuestionService,
  ) {
    super(service);
  }
}
