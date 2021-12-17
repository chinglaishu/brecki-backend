import { CreateSystemMatchDto } from './dto/create-systemMatch.dto';
import { UpdateSystemMatchDto } from './dto/update-systemMatch.dto';
import { BaseService } from "../utils/base/base.service";
import { SystemMatchDocument } from './entities/systemMatch.entity';
import { Model } from 'mongoose';
import { SystemMatchFilterOption } from 'src/core/filter/filter';
export declare class SystemMatchService extends BaseService<CreateSystemMatchDto, UpdateSystemMatchDto, SystemMatchFilterOption> {
    model: Model<SystemMatchDocument>;
    constructor(model: Model<SystemMatchDocument>);
    populateExecList(results: any): Promise<any>;
    populateExec(result: any): Promise<any>;
}
