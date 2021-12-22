import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionFilterOption } from 'src/core/filter/filter';
import { ReqUser } from 'src/core/decorator/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { QuestionChoiceService } from 'src/questionChoice/questionChoice.service';
import { QuestionChoice } from 'src/utils/base/base.entity';

@Controller('question')
export class QuestionController extends BaseController<CreateQuestionDto, UpdateQuestionDto, QuestionFilterOption> {

  constructor(
    public service: QuestionService,
    public questionChoiceService: QuestionChoiceService,
  ) {
    super(service);
  }

  @Get("request-to-answer/:num")
  async getRequestToAnswer(@ReqUser() user: User, @Query("num") num: number) {

    return await this.service.getRequestToAnswer(num);
  }

  @Post("create-with-choice")
  async createWithChoice(@ReqUser() user: User, @Body() body: CreateQuestionDto) {
    const {questionChoices} = body;
    const questionChoiceIds = await Promise.all(questionChoices.map(async (questionChoice) => {
      const result: QuestionChoice = await this.questionChoiceService.create({...questionChoice});
      return result.id
    }));
    return await this.service.create({...body, questionChoiceIds});
  }

}
