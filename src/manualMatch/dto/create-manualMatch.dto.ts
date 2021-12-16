import { IsAlpha, IsArray, IsString } from 'class-validator';

export class CreateManualMatchDto {
  @IsString()
  userId: string;
  @IsArray()
  matchUserIds: string[];
}
