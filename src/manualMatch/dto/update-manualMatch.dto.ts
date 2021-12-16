import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateManualMatchDto {
  @IsOptional()
  @IsString()
  userId?: string;
  @IsOptional()
  @IsArray()
  matchUserIds?: string[];
}
