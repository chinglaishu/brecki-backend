import { ConfigService } from './config.service';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { BaseController } from 'src/utils/base/base.controller';
export declare class ConfigController extends BaseController<CreateConfigDto, UpdateConfigDto, any> {
    service: ConfigService;
    constructor(service: ConfigService);
}
