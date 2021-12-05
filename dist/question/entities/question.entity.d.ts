import * as mongoose from 'mongoose';
import { BaseEntity, MultiLang, QuestionChoice } from '../../utils/base/base.entity';
export declare type QuestionDocument = Question & mongoose.Document;
export declare class Question extends BaseEntity {
    title: MultiLang;
    questionChoiceIds: string[];
    questionChoices: QuestionChoice[];
    defaultPersonalityKeys: string[];
    isPaint: boolean;
    imageUrl: string;
}
export declare const QuestionSchema: mongoose.Schema<mongoose.Document<Question, any, any>, mongoose.Model<mongoose.Document<Question, any, any>, any, any>, undefined, {}>;
