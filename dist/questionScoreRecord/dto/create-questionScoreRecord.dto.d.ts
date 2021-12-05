import { PersonalityScoreRecord } from 'src/utils/base/base.entity';
export declare class CreateQuestionScoreRecordDto {
    fromUserId: string;
    toUserId: string;
    personalityScoreRecords: PersonalityScoreRecord[];
}
