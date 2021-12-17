import * as mongoose from 'mongoose';
import { Question } from 'src/question/entities/question.entity';
import { BaseEntity } from '../../utils/base/base.entity';
export declare type QuestionChoiceRecordDocument = QuestionChoiceRecord & mongoose.Document;
export declare class QuestionChoiceRecord extends BaseEntity {
    userId: string;
    questionId: string;
    choiceId: string;
    content: string;
    imageUrl: string;
    question: Question;
}
export declare const QuestionChoiceRecordSchema: mongoose.Schema<mongoose.Document<QuestionChoiceRecord, any, any>, mongoose.Model<mongoose.Document<QuestionChoiceRecord, any, any>, any, any>, undefined, {}>;
