import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { BaseService } from "../utils/base/base.service";
import { MatchDocument } from './entities/match.entity';
import { Model } from 'mongoose';
import { MatchFilterOption } from 'src/core/filter/filter';
export declare class MatchService extends BaseService<CreateMatchDto, UpdateMatchDto, MatchFilterOption> {
    model: Model<MatchDocument>;
    constructor(model: Model<MatchDocument>);
}
