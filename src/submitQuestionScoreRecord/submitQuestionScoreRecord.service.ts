import { Injectable } from '@nestjs/common';
import { CreateSubmitQuestionScoreRecordDto } from './dto/create-submitQuestionScoreRecord.dto';
import { UpdateSubmitQuestionScoreRecordDto } from './dto/update-submitQuestionScoreRecord.dto';
import { BaseService } from "../utils/base/base.service";
import { SubmitQuestionScoreRecord, SubmitQuestionScoreRecordDocument } from './entities/submitQuestionScoreRecord.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubmitQuestionScoreRecordFilterOption } from 'src/core/filter/filter';
import systemMatchHelper from 'src/systemMatch/helper/helper';

@Injectable()
export class SubmitQuestionScoreRecordService extends BaseService<CreateSubmitQuestionScoreRecordDto, UpdateSubmitQuestionScoreRecordDto, SubmitQuestionScoreRecordFilterOption> {
  constructor(
    @InjectModel(SubmitQuestionScoreRecord.name) public model: Model<SubmitQuestionScoreRecordDocument>,
  ) {
    super(model);
    this.populates = ["questionScoreRecords"];
    this.createAddUserId = true;
  }

  async populateExecList(results: any) {
    const field = systemMatchHelper.getMatchUserPersonalInfoField();
    for (let i = 0 ; i < results.length ; i++) {
      results[i] = await results[i].populate("user", field).execPopulate();
    }
    return results;
  }

  async populateExec(result: any) {
    if (!result) {return null; }
    const field = systemMatchHelper.getMatchUserPersonalInfoField();
    for (let i = 0 ; i < this.populates.length ; i++) {
      result = await result.populate(this.populates[i]).execPopulate();
    }
    result = await result.populate("user", field).execPopulate();
    return result;
  }
}
