import { IsArray, IsEmail, IsNumber, IsObject, IsOptional, IsString, Length, ValidateNested } from 'class-validator';
import { LANGUAGE, ROLE_NUM, ACCOUNT_TYPE_NUM } from '../../constant/constant';
import { PersonalInfo } from 'src/utils/base/base.entity';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  @Length(8, 20)
  password?: string;

  // @IsString()
  // displayName?: string;

  // @IsObject()
  // personalInfo?: PersonalInfo;

  // @IsObject()
  // target?: Target;

  // @IsString()
  // language?: LANGUAGE;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsNumber()
  accountTypeNum?: ACCOUNT_TYPE_NUM;

  @IsOptional()
  @IsString()
  socialId?: string;

  @IsOptional()
  @IsString()
  firebaseEmail?: string;

  @IsOptional()
  @IsString()
  firebasePassword?: string;
}
