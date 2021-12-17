import { CreateManualMatchDto } from './dto/create-manualMatch.dto';
import { UpdateManualMatchDto } from './dto/update-manualMatch.dto';
import { BaseService } from "../utils/base/base.service";
import { ManualMatchDocument } from './entities/manualMatch.entity';
import { Model } from 'mongoose';
import { ManualMatchFilterOption } from 'src/core/filter/filter';
export declare class ManualMatchService extends BaseService<CreateManualMatchDto, UpdateManualMatchDto, ManualMatchFilterOption> {
    model: Model<ManualMatchDocument>;
    constructor(model: Model<ManualMatchDocument>);
    populateExecList(results: any): Promise<any>;
    populateExec(result: any): Promise<any>;
}
