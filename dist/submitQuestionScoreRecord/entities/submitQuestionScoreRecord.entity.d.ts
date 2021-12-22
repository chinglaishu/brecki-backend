import * as mongoose from 'mongoose';
import { QuestionScoreRecord } from 'src/questionScoreRecord/entities/questionScoreRecord.entity';
import { BaseEntity } from '../../utils/base/base.entity';
export declare type SubmitQuestionScoreRecordDocument = SubmitQuestionScoreRecord & mongoose.Document;
export declare class SubmitQuestionScoreRecord extends BaseEntity {
    userId: string;
    toUserId: string;
    submitQuestionRecordId: string;
    questionScoreRecordIds: string[];
    questionScoreRecords: QuestionScoreRecord[];
}
export declare const SubmitQuestionScoreRecordSchema: mongoose.Schema<mongoose.Document<SubmitQuestionScoreRecord, any, any>, mongoose.Model<mongoose.Document<SubmitQuestionScoreRecord, any, any>, any, any>, undefined, {}>;
