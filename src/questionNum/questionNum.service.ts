import { Injectable } from '@nestjs/common';
import { CreateQuestionNumDto } from './dto/create-questionNum.dto';
import { UpdateQuestionNumDto } from './dto/update-questionNum.dto';
import { BaseService } from "../utils/base/base.service";
import { QuestionNum, QuestionNumDocument } from './entities/questionNum.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionNumFilterOption } from 'src/core/filter/filter';

@Injectable()
export class QuestionNumService extends BaseService<CreateQuestionNumDto, UpdateQuestionNumDto, QuestionNumFilterOption> {
  constructor(
    @InjectModel(QuestionNum.name) public model: Model<QuestionNumDocument>,
  ) {
    super(model);
  }

}
