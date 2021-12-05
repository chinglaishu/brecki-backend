import { QuestionChoiceRecord } from 'src/questionChoiceRecord/entities/questionChoiceRecord.entity';
export declare class CreateSubmitQuestionRecordDto {
    userId?: string;
    questionChoiceRecordIds: string[];
}
export declare class CreateWithChoiceRecord {
    questionChoiceRecords: QuestionChoiceRecord[];
}
