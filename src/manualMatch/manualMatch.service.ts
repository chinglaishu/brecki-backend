import { Injectable } from '@nestjs/common';
import { CreateManualMatchDto } from './dto/create-manualMatch.dto';
import { UpdateManualMatchDto } from './dto/update-manualMatch.dto';
import { BaseService } from "../utils/base/base.service";
import { ManualMatch, ManualMatchDocument } from './entities/manualMatch.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ManualMatchFilterOption } from 'src/core/filter/filter';

@Injectable()
export class ManualMatchService extends BaseService<CreateManualMatchDto, UpdateManualMatchDto, ManualMatchFilterOption> {
  constructor(
    @InjectModel(ManualMatch.name) public model: Model<ManualMatchDocument>,
  ) {
    super(model);
    this.createAddUserId = true;
  }

  async populateExecList(results: any) {
    for (let i = 0 ; i < results.length ; i++) {
      for (let a = 0 ; a < this.populates.length ; a++) {
        results[i] = await results[i].populate("matchUsers", {displayName: 1, personalInfo: 1}).execPopulate();
      }
    }
    return results;
  }

  async populateExec(result: any) {
    for (let i = 0 ; i < this.populates.length ; i++) {
      result = await result.populate("matchUsers", {displayName: 1, personalInfo: 1}).execPopulate();
    }
    return result;
  }
}
