import { Injectable } from '@nestjs/common';
import { CreateQuestionScoreRecordDto } from './dto/create-questionScoreRecord.dto';
import { UpdateQuestionScoreRecordDto } from './dto/update-questionScoreRecord.dto';
import { BaseService } from "../utils/base/base.service";
import { QuestionScoreRecord, QuestionScoreRecordDocument } from './entities/questionScoreRecord.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionScoreRecordFilterOption } from 'src/core/filter/filter';

@Injectable()
export class QuestionScoreRecordService extends BaseService<CreateQuestionScoreRecordDto, UpdateQuestionScoreRecordDto, QuestionScoreRecordFilterOption> {
  constructor(
    @InjectModel(QuestionScoreRecord.name) public model: Model<QuestionScoreRecordDocument>,
  ) {
    super(model);
    this.createAddUserId = true;
  }

}
