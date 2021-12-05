import { PersonalityService } from './personality.service';
import { CreatePersonalityDto } from './dto/create-personality.dto';
import { UpdatePersonalityDto } from './dto/update-personality.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { PersonalityFilterOption } from 'src/core/filter/filter';
export declare class PersonalityController extends BaseController<CreatePersonalityDto, UpdatePersonalityDto, PersonalityFilterOption> {
    service: PersonalityService;
    constructor(service: PersonalityService);
}
