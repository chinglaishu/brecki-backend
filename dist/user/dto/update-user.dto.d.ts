import { LANGUAGE, ROLE_NUM, ACCOUNT_TYPE_NUM } from '../../constant/constant';
import { Friend, PersonalInfo, PersonalityScore } from 'src/utils/base/base.entity';
export declare class UpdateUserDto {
    username?: string;
    password?: string;
    phone?: string;
    roleNum?: ROLE_NUM;
    displayName?: string;
    personalInfo?: PersonalInfo;
    personalityScore?: PersonalityScore;
    personalityScoreNum?: number;
    friends?: Friend[];
    lang?: LANGUAGE;
    notificationTokens?: string[];
    accountTypeNum?: ACCOUNT_TYPE_NUM;
    lastSubmitQuestionRecordDate?: Date;
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
