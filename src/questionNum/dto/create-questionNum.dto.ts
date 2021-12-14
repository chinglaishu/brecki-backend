import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { MultiLang } from 'src/utils/base/base.entity';

export class CreateQuestionNumDto {
  @IsOptional()
  @IsNumber()
  questionNum?: number;
  @IsOptional()
  @IsObject()
  description?: MultiLang;
}
