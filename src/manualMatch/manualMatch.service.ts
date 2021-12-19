import { Injectable } from '@nestjs/common';
import { CreateManualMatchDto } from './dto/create-manualMatch.dto';
import { UpdateManualMatchDto } from './dto/update-manualMatch.dto';
import { BaseService } from "../utils/base/base.service";
import { ManualMatch, ManualMatchDocument } from './entities/manualMatch.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ManualMatchFilterOption } from 'src/core/filter/filter';
import systemMatchHelper from 'src/systemMatch/helper/helper';

@Injectable()
export class ManualMatchService extends BaseService<CreateManualMatchDto, UpdateManualMatchDto, ManualMatchFilterOption> {
  constructor(
    @InjectModel(ManualMatch.name) public model: Model<ManualMatchDocument>,
  ) {
    super(model);
    this.createAddUserId = true;
  }

  async populateExecList(results: any) {
    if (!results) {return results; }
    const field = systemMatchHelper.getMatchUserPersonalInfoField();
    for (let i = 0 ; i < results.length ; i++) {
      results[i] = await results[i].populate("matchUsers", field).execPopulate();
    }
    return results;
  }

  async populateExec(result: any) {
    if (!result) {return result; }
    const field = systemMatchHelper.getMatchUserPersonalInfoField();
    result = await result.populate("matchUsers", field).execPopulate();
    return result;
  }
}
