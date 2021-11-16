import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { BaseService } from "../utils/base/base.service";
import { TemplateDocument } from './entities/template.entity';
import { Model } from 'mongoose';
import { TemplateFilterOption } from 'src/core/filter/filter';
export declare class TemplateService extends BaseService<CreateTemplateDto, UpdateTemplateDto, TemplateFilterOption> {
    model: Model<TemplateDocument>;
    constructor(model: Model<TemplateDocument>);
}
