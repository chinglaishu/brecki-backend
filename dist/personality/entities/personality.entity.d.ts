import * as mongoose from 'mongoose';
import { BaseEntity, MultiLang } from '../../utils/base/base.entity';
export declare type PersonalityDocument = Personality & mongoose.Document;
export declare class Personality extends BaseEntity {
    key: string;
    name: MultiLang;
    description: MultiLang;
}
export declare const PersonalitySchema: mongoose.Schema<mongoose.Document<Personality, any, any>, mongoose.Model<mongoose.Document<Personality, any, any>, any, any>, undefined, {}>;
