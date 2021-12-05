import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { BaseService } from "../utils/base/base.service";
import { Question, QuestionDocument } from './entities/question.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionFilterOption } from 'src/core/filter/filter';

@Injectable()
export class QuestionService extends BaseService<CreateQuestionDto, UpdateQuestionDto, QuestionFilterOption> {
  constructor(
    @InjectModel(Question.name) public model: Model<QuestionDocument>,
  ) {
    super(model);
    this.populates = ["questionChoices"];
  }

}
