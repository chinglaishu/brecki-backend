import { Injectable } from '@nestjs/common';
import { CreateSystemMatchDto } from './dto/create-systemMatch.dto';
import { UpdateSystemMatchDto } from './dto/update-systemMatch.dto';
import { BaseService } from "../utils/base/base.service";
import { SystemMatch, SystemMatchDocument } from './entities/systemMatch.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SystemMatchFilterOption } from 'src/core/filter/filter';
import systemMatchHelper from './helper/helper';

@Injectable()
export class SystemMatchService extends BaseService<CreateSystemMatchDto, UpdateSystemMatchDto, SystemMatchFilterOption> {
  constructor(
    @InjectModel(SystemMatch.name) public model: Model<SystemMatchDocument>,
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
