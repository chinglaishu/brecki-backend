import { IsArray, IsObject, IsOptional, IsString } from 'class-validator';
import { MultiLang, QuestionChoice } from 'src/utils/base/base.entity';

export class CreateQuestionDto {
  @IsOptional()
  @IsObject()
  title?: MultiLang;
  @IsOptional()
  @IsArray()
  questionChoices?: QuestionChoice[];
  @IsOptional()
  @IsArray()
  questionChoiceIds: string[];
  @IsOptional()
  @IsArray()
  defaultPersonalityKeys?: string[];
}
