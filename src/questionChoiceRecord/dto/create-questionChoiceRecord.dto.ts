import { IsOptional, IsString } from 'class-validator';

export class CreateQuestionChoiceRecordDto {
  @IsOptional()
  @IsString()
  userId: string;
  @IsOptional()
  @IsString()
  questionId: string;
  @IsOptional()
  @IsString()
  choiceId: string;
  @IsOptional()
  @IsString()
  content: string;
}
