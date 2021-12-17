import * as mongoose from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from '../../utils/base/base.entity';
export declare type ManualMatchDocument = ManualMatch & mongoose.Document;
export declare class ManualMatch extends BaseEntity {
    userId: string;
    matchUserIds: string[];
    matchUsers: User[];
}
export declare const ManualMatchSchema: mongoose.Schema<mongoose.Document<ManualMatch, any, any>, mongoose.Model<mongoose.Document<ManualMatch, any, any>, any, any>, undefined, {}>;
