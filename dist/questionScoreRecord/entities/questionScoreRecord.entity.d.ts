import * as mongoose from 'mongoose';
import { BaseEntity, PersonalityScore } from '../../utils/base/base.entity';
export declare type QuestionScoreRecordDocument = QuestionScoreRecord & mongoose.Document;
export declare class QuestionScoreRecord extends BaseEntity {
    personalityScore: PersonalityScore;
    questionId: string;
    comment: string;
}
export declare const QuestionScoreRecordSchema: mongoose.Schema<mongoose.Document<QuestionScoreRecord, any, any>, mongoose.Model<mongoose.Document<QuestionScoreRecord, any, any>, any, any>, undefined, {}>;
