import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateSystemMatchDto {
  @IsOptional()
  @IsString()
  userId?: string;
  @IsOptional()
  @IsArray()
  matchUserIds?: string[];
}
