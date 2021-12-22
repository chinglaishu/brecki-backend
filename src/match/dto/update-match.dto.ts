import { IsAlpha, IsArray, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { MATCH_METHOD_NUM, MATCH_STATUS_NUM } from 'src/constant/constant';

export class UpdateMatchDto {

  @IsNumber()
  status: MATCH_STATUS_NUM;

  @IsOptional()
  @IsArray()
  blockedIds?: string[];

  @IsOptional()
  @IsArray()
  quitedIds?: string[];
}
