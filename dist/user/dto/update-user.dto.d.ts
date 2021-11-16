import { LANGUAGE, ROLE_NUM, ACCOUNT_TYPE_NUM } from '../../constant/constant';
import { Friend, PersonalInfo, Target } from 'src/utils/base/base.entity';
export declare class UpdateUserDto {
    email?: string;
    password?: string;
    phone?: string;
    roleNum?: ROLE_NUM;
    displayName?: string;
    personalInfo?: PersonalInfo;
    target?: Target;
    friends?: Friend[];
    lang?: LANGUAGE;
    accountTypeNum?: ACCOUNT_TYPE_NUM;
}
