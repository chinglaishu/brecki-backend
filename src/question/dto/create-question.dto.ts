import { IsArray, IsObject, IsOptional, IsString } from 'class-validator';
import { MultiLang, QuestionChoice } from 'src/utils/base/base.entity';

export class CreateQuestionDto {
  @IsOptional()
  @IsObject()
  title?: MultiLang;
  @IsOptional()
  @IsObject()
  Choices?: QuestionChoice[];
  @IsOptional()
  @IsArray()
  defaultPersonalityKeys?: string[];
}
