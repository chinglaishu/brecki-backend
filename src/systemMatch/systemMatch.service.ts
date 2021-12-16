import { Injectable } from '@nestjs/common';
import { CreateSystemMatchDto } from './dto/create-systemMatch.dto';
import { UpdateSystemMatchDto } from './dto/update-systemMatch.dto';
import { BaseService } from "../utils/base/base.service";
import { SystemMatch, SystemMatchDocument } from './entities/systemMatch.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SystemMatchFilterOption } from 'src/core/filter/filter';

@Injectable()
export class SystemMatchService extends BaseService<CreateSystemMatchDto, UpdateSystemMatchDto, SystemMatchFilterOption> {
  constructor(
    @InjectModel(SystemMatch.name) public model: Model<SystemMatchDocument>,
  ) {
    super(model);
  }

}
