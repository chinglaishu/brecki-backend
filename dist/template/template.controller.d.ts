import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { TemplateFilterOption } from 'src/core/filter/filter';
export declare class TemplateController extends BaseController<CreateTemplateDto, UpdateTemplateDto, TemplateFilterOption> {
    service: TemplateService;
    constructor(service: TemplateService);
}
