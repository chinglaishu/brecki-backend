import { QuestionScoreRecord } from 'src/questionScoreRecord/entities/questionScoreRecord.entity';
import { PersonalityScore } from 'src/utils/base/base.entity';
export declare class CreateSubmitQuestionScoreRecordDto {
    userId?: string;
    toUserId: string;
    submitQuestionRecordId: string;
    questionScoreRecordIds?: string[];
    usePersonalityScore: PersonalityScore;
}
export declare class CreateWithScoreRecordDto {
    userId?: string;
    toUserId: string;
    submitQuestionRecordId: string;
    questionScoreRecords: QuestionScoreRecord[];
}
