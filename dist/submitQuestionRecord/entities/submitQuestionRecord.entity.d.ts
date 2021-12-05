import * as mongoose from 'mongoose';
import { QuestionChoiceRecord } from 'src/questionChoiceRecord/entities/questionChoiceRecord.entity';
import { BaseEntity } from '../../utils/base/base.entity';
export declare type SubmitQuestionRecordDocument = SubmitQuestionRecord & mongoose.Document;
export declare class SubmitQuestionRecord extends BaseEntity {
    userId: string;
    questionChoiceRecordIds: string[];
    questionChoiceRecords: QuestionChoiceRecord[];
}
export declare const SubmitQuestionRecordSchema: mongoose.Schema<mongoose.Document<SubmitQuestionRecord, any, any>, mongoose.Model<mongoose.Document<SubmitQuestionRecord, any, any>, any, any>, undefined, {}>;
