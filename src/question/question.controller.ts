import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionFilterOption } from 'src/core/filter/filter';
import { ReqUser } from 'src/core/decorator/user.decorator';
import { User } from 'src/user/entities/user.entity';

@Controller('question')
export class QuestionController extends BaseController<CreateQuestionDto, UpdateQuestionDto, QuestionFilterOption> {

  constructor(
    public service: QuestionService,
  ) {
    super(service);
  }

  @Get("request-to-answer/:num")
  async getRequestToAnswer(@ReqUser() user: User, @Query("num") num: number) {

    return await this.service.getRequestToAnswer(num);
  }

}
