import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { BaseService } from "../utils/base/base.service";
import { MatchDocument } from './entities/match.entity';
import { Model } from 'mongoose';
import { MatchFilterOption } from 'src/core/filter/filter';
import { MATCH_METHOD_NUM } from 'src/constant/constant';
import { UserService } from 'src/user/user.service';
export declare class MatchService extends BaseService<CreateMatchDto, UpdateMatchDto, MatchFilterOption> {
    model: Model<MatchDocument>;
    constructor(model: Model<MatchDocument>);
    likeUser(userId: string, toUserId: string, method: MATCH_METHOD_NUM, userService: UserService, submitQuestionScoreRecordId?: string): Promise<any>;
    crossUser(userId: string, toUserId: string, method: MATCH_METHOD_NUM, userService: UserService): Promise<any>;
}
