import * as mongoose from 'mongoose';
import { CONFIG_TYPE_NUM, MESSAGE_METHOD_NUM } from 'src/constant/constant';
import { BaseEntity, MultiLang } from '../../utils/base/base.entity';
export declare type ConfigDocument = Config & mongoose.Document;
export declare class Config extends BaseEntity {
    typeNum: CONFIG_TYPE_NUM;
    name: string;
    messageMethodNum: MESSAGE_METHOD_NUM;
    subject: MultiLang;
    content: MultiLang;
}
export declare const ConfigSchema: mongoose.Schema<mongoose.Document<Config, any, any>, mongoose.Model<mongoose.Document<Config, any, any>, any, any>, undefined, {}>;
