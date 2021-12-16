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
  }

}
