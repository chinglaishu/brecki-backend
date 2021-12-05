import { Injectable } from '@nestjs/common';
import { CreateQuestionChoiceDto } from './dto/create-questionChoice.dto';
import { UpdateQuestionChoiceDto } from './dto/update-questionChoice.dto';
import { BaseService } from "../utils/base/base.service";
import { QuestionChoice, QuestionChoiceDocument } from './entities/questionChoice.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionChoiceFilterOption } from 'src/core/filter/filter';

@Injectable()
export class QuestionChoiceService extends BaseService<CreateQuestionChoiceDto, UpdateQuestionChoiceDto, QuestionChoiceFilterOption> {
  constructor(
    @InjectModel(QuestionChoice.name) public model: Model<QuestionChoiceDocument>,
  ) {
    super(model);
  }

}
