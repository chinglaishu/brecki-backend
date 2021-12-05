import { CreatePersonalityDto } from './dto/create-personality.dto';
import { UpdatePersonalityDto } from './dto/update-personality.dto';
import { BaseService } from "../utils/base/base.service";
import { PersonalityDocument } from './entities/personality.entity';
import { Model } from 'mongoose';
import { PersonalityFilterOption } from 'src/core/filter/filter';
export declare class PersonalityService extends BaseService<CreatePersonalityDto, UpdatePersonalityDto, PersonalityFilterOption> {
    model: Model<PersonalityDocument>;
    constructor(model: Model<PersonalityDocument>);
}
