import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { QuestionChoiceService } from './questionChoice.service';
import { CreateQuestionChoiceDto } from './dto/create-questionChoice.dto';
import { UpdateQuestionChoiceDto } from './dto/update-questionChoice.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionChoiceFilterOption } from 'src/core/filter/filter';

@Controller('question-choice')
export class QuestionChoiceController extends BaseController<CreateQuestionChoiceDto, UpdateQuestionChoiceDto, QuestionChoiceFilterOption> {

  constructor(
    public service: QuestionChoiceService,
  ) {
    super(service);
  }
}
