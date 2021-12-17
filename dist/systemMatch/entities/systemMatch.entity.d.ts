import * as mongoose from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from '../../utils/base/base.entity';
export declare type SystemMatchDocument = SystemMatch & mongoose.Document;
export declare class SystemMatch extends BaseEntity {
    userId: string;
    matchUserIds: string[];
    matchUsers: User[];
}
export declare const SystemMatchSchema: mongoose.Schema<mongoose.Document<SystemMatch, any, any>, mongoose.Model<mongoose.Document<SystemMatch, any, any>, any, any>, undefined, {}>;
