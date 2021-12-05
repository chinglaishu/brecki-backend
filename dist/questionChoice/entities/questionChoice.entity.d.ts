import * as mongoose from 'mongoose';
import { BaseEntity, MultiLang } from '../../utils/base/base.entity';
export declare type QuestionChoiceDocument = QuestionChoice & mongoose.Document;
export declare class QuestionChoice extends BaseEntity {
    choice: MultiLang;
    isFree: boolean;
}
export declare const QuestionChoiceSchema: mongoose.Schema<mongoose.Document<QuestionChoice, any, any>, mongoose.Model<mongoose.Document<QuestionChoice, any, any>, any, any>, undefined, {}>;
