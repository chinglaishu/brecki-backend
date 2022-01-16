import * as mongoose from 'mongoose';
import { QuestionChoiceRecord } from 'src/questionChoiceRecord/entities/questionChoiceRecord.entity';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from '../../utils/base/base.entity';
export declare type SubmitQuestionRecordDocument = SubmitQuestionRecord & mongoose.Document;
export declare class SubmitQuestionRecord extends BaseEntity {
    userId: string;
    user: User;
    questionChoiceRecordIds: string[];
    questionChoiceRecords: QuestionChoiceRecord[];
    submitQuestionScoreRecord?: any;
}
export declare const SubmitQuestionRecordSchema: mongoose.Schema<mongoose.Document<SubmitQuestionRecord, any, any>, mongoose.Model<mongoose.Document<SubmitQuestionRecord, any, any>, any, any>, undefined, {}>;
