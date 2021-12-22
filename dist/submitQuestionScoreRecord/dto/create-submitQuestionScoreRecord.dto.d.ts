import { QuestionScoreRecord } from 'src/questionScoreRecord/entities/questionScoreRecord.entity';
export declare class CreateSubmitQuestionScoreRecordDto {
    userId?: string;
    toUserId: string;
    submitQuestionRecordId: string;
    questionScoreRecordIds?: string[];
}
export declare class CreateWithScoreRecordDto {
    userId?: string;
    toUserId: string;
    submitQuestionRecordId: string;
    questionScoreRecords: QuestionScoreRecord[];
}
