import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { MATCH_METHOD_NUM, MATCH_STATUS_NUM } from 'src/constant/constant';

export class CreateMatchDto {
  @IsArray()
  userIds?: string[];

  @IsNumber()
  method: MATCH_METHOD_NUM;

  @IsOptional()
  @IsNumber()
  status?: MATCH_STATUS_NUM;

}
