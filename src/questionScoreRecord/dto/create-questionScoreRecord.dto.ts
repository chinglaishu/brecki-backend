import { IsObject, IsOptional, IsString } from 'class-validator';
import { PersonalityScore } from 'src/utils/base/base.entity';

export class CreateQuestionScoreRecordDto {
  @IsString()
  questionId: string;
  @IsObject()
  personalityScore: PersonalityScore;
  @IsOptional()
  @IsString()
  comment?: string;
}
