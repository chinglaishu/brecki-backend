import { Injectable } from '@nestjs/common';
import { CreatePersonalityDto } from './dto/create-personality.dto';
import { UpdatePersonalityDto } from './dto/update-personality.dto';
import { BaseService } from "../utils/base/base.service";
import { Personality, PersonalityDocument } from './entities/personality.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonalityFilterOption } from 'src/core/filter/filter';

@Injectable()
export class PersonalityService extends BaseService<CreatePersonalityDto, UpdatePersonalityDto, PersonalityFilterOption> {
  constructor(
    @InjectModel(Personality.name) public model: Model<PersonalityDocument>,
  ) {
    super(model);
  }

}
