import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateManualMatchDto {
  @IsOptional()
  @IsString()
  userId?: string;
  @IsOptional()
  @IsArray()
  matchUserIds?: string[];
  @IsOptional()
  @IsDate()
  updatedAt: Date;
}
