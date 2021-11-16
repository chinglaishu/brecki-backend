import * as mongoose from 'mongoose';
import { BaseEntity } from '../../utils/base/base.entity';
export declare type TokenDocument = Token & mongoose.Document;
export declare class Token extends BaseEntity {
    userId: string;
    refreshToken: string;
    isEnable: boolean;
}
export declare const TokenSchema: mongoose.Schema<mongoose.Document<Token, any, any>, mongoose.Model<mongoose.Document<Token, any, any>, any, any>, undefined, {}>;
