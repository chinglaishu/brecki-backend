import { IsAlpha, IsArray, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { MATCH_METHOD_NUM, MATCH_STATUS_NUM } from 'src/constant/constant';
import { CreateMatchDto } from './create-match.dto';

export class UpdateMatchDto extends CreateMatchDto {

  @IsNumber()
  status?: MATCH_STATUS_NUM;

  @IsOptional()
  @IsArray()
  blockedIds?: string[];

  @IsOptional()
  @IsArray()
  quitedIds?: string[];

  @IsOptional()
  @IsNumber()
  intimacy?: number;
}
