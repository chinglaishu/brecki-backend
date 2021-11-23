import * as mongoose from 'mongoose';
import { MATCH_METHOD_NUM, MATCH_STATUS_NUM } from 'src/constant/constant';
import { BaseEntity } from '../../utils/base/base.entity';
export declare type MatchDocument = Match & mongoose.Document;
export declare class Match extends BaseEntity {
    fromUserId: string;
    toUserId: string;
    method: MATCH_METHOD_NUM;
    status: MATCH_STATUS_NUM;
}
export declare const MatchSchema: mongoose.Schema<mongoose.Document<Match, any, any>, mongoose.Model<mongoose.Document<Match, any, any>, any, any>, undefined, {}>;