import { PersonalityScore } from 'src/utils/base/base.entity';
export declare class CreateQuestionScoreRecordDto {
    questionId: string;
    personalityScore: PersonalityScore;
    comment?: string;
}
