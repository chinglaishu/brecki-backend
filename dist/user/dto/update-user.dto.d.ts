import { LANGUAGE, ROLE_NUM, ACCOUNT_TYPE_NUM } from '../../constant/constant';
import { Friend, PersonalInfo } from 'src/utils/base/base.entity';
export declare class UpdateUserDto {
    username?: string;
    password?: string;
    phone?: string;
    roleNum?: ROLE_NUM;
    displayName?: string;
    personalInfo?: PersonalInfo;
    friends?: Friend[];
    lang?: LANGUAGE;
    accountTypeNum?: ACCOUNT_TYPE_NUM;
    lastSubmitQuestionRecord?: string;
}
export declare class UploadProfilePicDTO {
    base64: string;
    fileType: string;
}
export declare class UploadImageDTO {
    base64: string;
    fileType: string;
    directory: string;
}
