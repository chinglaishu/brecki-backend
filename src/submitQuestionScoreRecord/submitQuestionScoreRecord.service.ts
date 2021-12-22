import { Injectable } from '@nestjs/common';
import { CreateSubmitQuestionScoreRecordDto } from './dto/create-submitQuestionScoreRecord.dto';
import { UpdateSubmitQuestionScoreRecordDto } from './dto/update-submitQuestionScoreRecord.dto';
import { BaseService } from "../utils/base/base.service";
import { SubmitQuestionScoreRecord, SubmitQuestionScoreRecordDocument } from './entities/submitQuestionScoreRecord.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubmitQuestionScoreRecordFilterOption } from 'src/core/filter/filter';

@Injectable()
export class SubmitQuestionScoreRecordService extends BaseService<CreateSubmitQuestionScoreRecordDto, UpdateSubmitQuestionScoreRecordDto, SubmitQuestionScoreRecordFilterOption> {
  constructor(
    @InjectModel(SubmitQuestionScoreRecord.name) public model: Model<SubmitQuestionScoreRecordDocument>,
  ) {
    super(model);
  }

}
