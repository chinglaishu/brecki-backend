import { IsAlpha, IsArray, IsString } from 'class-validator';

export class CreateSystemMatchDto {
  @IsString()
  userId: string;
  @IsArray()
  matchUserIds: string[];
}
