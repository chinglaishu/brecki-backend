import * as mongoose from 'mongoose';
import { BaseEntity } from '../../utils/base/base.entity';
export declare type TemplateDocument = Template & mongoose.Document;
export declare class Template extends BaseEntity {
}
export declare const TemplateSchema: mongoose.Schema<mongoose.Document<Template, any, any>, mongoose.Model<mongoose.Document<Template, any, any>, any, any>, undefined, {}>;
