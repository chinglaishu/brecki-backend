import { IsArray, IsObject, IsOptional, IsString } from 'class-validator';
import { QuestionChoiceRecord } from 'src/questionChoiceRecord/entities/questionChoiceRecord.entity';

export class CreateSubmitQuestionRecordDto {
  @IsOptional()
  @IsString()
  userId?: string;
  @IsOptional()
  @IsString()
  questionChoiceRecordIds: string[];
}

export class CreateWithChoiceRecord {
  @IsArray()
  questionChoiceRecords: QuestionChoiceRecord[];
};
