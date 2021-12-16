import * as mongoose from 'mongoose';
import { BaseEntity, MultiLang } from '../../utils/base/base.entity';
export declare type QuestionNumDocument = QuestionNum & mongoose.Document;
export declare class QuestionNum extends BaseEntity {
    questionNum: number;
    description: MultiLang;
}
export declare const QuestionNumSchema: mongoose.Schema<mongoose.Document<QuestionNum, any, any>, mongoose.Model<mongoose.Document<QuestionNum, any, any>, any, any>, undefined, {}>;
