import { IsArray, IsObject, IsOptional, IsString } from 'class-validator';
import { QuestionScoreRecord } from 'src/questionScoreRecord/entities/questionScoreRecord.entity';
import { PersonalityScore } from 'src/utils/base/base.entity';

export class CreateSubmitQuestionScoreRecordDto {
  @IsOptional()
  @IsString()
  userId?: string;
  @IsString()
  toUserId: string;
  @IsString()
  submitQuestionRecordId: string;
  @IsOptional()
  @IsArray()
  questionScoreRecordIds?: string[];
}

export class CreateWithScoreRecordDto {
  @IsOptional()
  @IsString()
  userId?: string;
  @IsString()
  toUserId: string;
  @IsString()
  submitQuestionRecordId: string;
  @IsArray()
  questionScoreRecords: QuestionScoreRecord[];
};
