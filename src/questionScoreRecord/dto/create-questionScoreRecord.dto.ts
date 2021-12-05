import { IsObject, IsOptional, IsString } from 'class-validator';
import { PersonalityScoreRecord } from 'src/utils/base/base.entity';

export class CreateQuestionScoreRecordDto {
  @IsOptional()
  @IsString()
  fromUserId: string;
  @IsOptional()
  @IsString()
  toUserId: string;
  @IsOptional()
  @IsObject()
  personalityScoreRecords: PersonalityScoreRecord[];
}
