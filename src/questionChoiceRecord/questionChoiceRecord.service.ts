import { Injectable } from '@nestjs/common';
import { CreateQuestionChoiceRecordDto } from './dto/create-questionChoiceRecord.dto';
import { UpdateQuestionChoiceRecordDto } from './dto/update-questionChoiceRecord.dto';
import { BaseService } from "../utils/base/base.service";
import { QuestionChoiceRecord, QuestionChoiceRecordDocument } from './entities/questionChoiceRecord.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionChoiceRecordFilterOption } from 'src/core/filter/filter';

@Injectable()
export class QuestionChoiceRecordService extends BaseService<CreateQuestionChoiceRecordDto, UpdateQuestionChoiceRecordDto, QuestionChoiceRecordFilterOption> {
  constructor(
    @InjectModel(QuestionChoiceRecord.name) public model: Model<QuestionChoiceRecordDocument>,
  ) {
    super(model);
    this.createAddUserId = true;
  }

}
