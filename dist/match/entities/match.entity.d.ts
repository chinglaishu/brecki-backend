import * as mongoose from 'mongoose';
import { MATCH_METHOD_NUM, MATCH_STATUS_NUM } from 'src/constant/constant';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from '../../utils/base/base.entity';
import { ChatDataRecord } from '../type';
export declare type MatchDocument = Match & mongoose.Document;
export declare class Match extends BaseEntity {
    userIds: string[];
    users: User[];
    blockedIds: string[];
    quitedIds: string[];
    chatDataRecords: ChatDataRecord[];
    method: MATCH_METHOD_NUM;
    status: MATCH_STATUS_NUM;
    intimacy: number;
}
export declare const MatchSchema: mongoose.Schema<mongoose.Document<Match, any, any>, mongoose.Model<mongoose.Document<Match, any, any>, any, any>, undefined, {}>;
