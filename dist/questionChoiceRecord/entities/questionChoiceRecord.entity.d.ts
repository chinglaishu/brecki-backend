import * as mongoose from 'mongoose';
import { BaseEntity } from '../../utils/base/base.entity';
export declare type QuestionChoiceRecordDocument = QuestionChoiceRecord & mongoose.Document;
export declare class QuestionChoiceRecord extends BaseEntity {
    userId: string;
    questionId: string;
    choiceId: string;
    content: string;
    imageUrl: string;
}
export declare const QuestionChoiceRecordSchema: mongoose.Schema<mongoose.Document<QuestionChoiceRecord, any, any>, mongoose.Model<mongoose.Document<QuestionChoiceRecord, any, any>, any, any>, undefined, {}>;
