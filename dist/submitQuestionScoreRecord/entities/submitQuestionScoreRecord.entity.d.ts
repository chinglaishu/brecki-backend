import * as mongoose from 'mongoose';
import { QuestionScoreRecord } from 'src/questionScoreRecord/entities/questionScoreRecord.entity';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity, PersonalityScore } from '../../utils/base/base.entity';
export declare type SubmitQuestionScoreRecordDocument = SubmitQuestionScoreRecord & mongoose.Document;
export declare class SubmitQuestionScoreRecord extends BaseEntity {
    userId: string;
    user: User;
    toUserId: string;
    toUser: User;
    submitQuestionRecordId: string;
    questionScoreRecordIds: string[];
    questionScoreRecords: QuestionScoreRecord[];
    usePersonalityScore: PersonalityScore;
}
export declare const SubmitQuestionScoreRecordSchema: mongoose.Schema<mongoose.Document<SubmitQuestionScoreRecord, any, any>, mongoose.Model<mongoose.Document<SubmitQuestionScoreRecord, any, any>, any, any>, undefined, {}>;
