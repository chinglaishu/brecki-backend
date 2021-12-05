import { IsOptional, IsString } from 'class-validator';
import { MultiLang } from 'src/utils/base/base.entity';

export class CreatePersonalityDto {
  @IsOptional()
  @IsString()
  key: string;
  @IsOptional()
  @IsString()
  name: MultiLang;
}
