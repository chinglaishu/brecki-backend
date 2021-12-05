import { IsOptional, IsString } from 'class-validator';

export class CreateSubmitQuestionRecordDto {
  @IsOptional()
  @IsString()
  userId: string;
  @IsOptional()
  @IsString()
  questionChoiceRecordIds: string[];
}
