import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { BaseService } from "../utils/base/base.service";
import { ConfigDocument } from './entities/config.entity';
import { Model } from 'mongoose';
import { CONFIG_TYPE_NUM, LANGUAGE } from 'src/constant/constant';
export declare class ConfigService extends BaseService<CreateConfigDto, UpdateConfigDto, any> {
    model: Model<ConfigDocument>;
    constructor(model: Model<ConfigDocument>);
    findByLang(typeNum: CONFIG_TYPE_NUM, lang: LANGUAGE): Promise<{
        subject: string;
        content: string;
        messageMethodNum: import("src/constant/constant").MESSAGE_METHOD_NUM;
    }>;
}
