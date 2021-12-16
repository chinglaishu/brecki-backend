import { Prop } from '@nestjs/mongoose';
import { IsArray, IsEmail, IsNumber, IsObject, IsOptional, IsString, Length, ValidateNested } from 'class-validator';
import { LANGUAGE, ROLE_NUM, ACCOUNT_TYPE_NUM } from '../../constant/constant';
import { Friend, PersonalInfo, PersonalityScore } from 'src/utils/base/base.entity';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  @Length(8, 20)
  password?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsNumber()
  roleNum?: ROLE_NUM;

  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsObject()
  personalInfo?: PersonalInfo;

  @IsOptional()
  @IsObject()
  personalityScore?: PersonalityScore;

  @IsOptional()
  @IsNumber()
  personalityScoreNum?: number;

  @IsOptional()
  @IsArray()
  friends?: Friend[];

  @IsOptional()
  @IsString()
  lang?: LANGUAGE;

  @IsOptional()
  @IsArray()
  notificationTokens?: string[];

  @IsOptional()
  @IsNumber()
  accountTypeNum?: ACCOUNT_TYPE_NUM;

  @IsOptional()
  @IsString()
  lastSubmitQuestionRecord?: string;
}

export class UploadProfilePicDTO {
  @IsString()
  base64: string;
  @IsString()
  fileType: string;
}

export class UploadImageDTO {
  @IsString()
  base64: string;
  @IsString()
  fileType: string;
  @IsString()
  directory: string;
}
