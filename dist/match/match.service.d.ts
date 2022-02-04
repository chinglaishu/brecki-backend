import { AddChatDataRecordDto, CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { BaseService } from "../utils/base/base.service";
import { Match, MatchDocument } from './entities/match.entity';
import { Model } from 'mongoose';
import { MatchFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
export declare class MatchService extends BaseService<CreateMatchDto, UpdateMatchDto, MatchFilterOption> {
    model: Model<MatchDocument>;
    constructor(model: Model<MatchDocument>);
    addChatDataRecord(user: User, match: Match, body: AddChatDataRecordDto): Promise<any>;
    populateExecList(results: any): Promise<any>;
    populateExec(result: any): Promise<any>;
}
