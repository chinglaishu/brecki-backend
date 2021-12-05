import { AGE_RANGE_NUM, FRIEND_STATUS_NUM, SEX_NUM } from '../../constant/constant';
export declare class BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class MultiLang {
    en: string;
    zh: string;
}
export declare class EmailOrSMSData {
    subject: string;
    content: string;
    replace: string;
}
export declare type ProfilePicTwoUrl = {
    blurMore: string;
    blurLess: string;
    clear: string;
};
export declare class PersonalInfo {
    sex: SEX_NUM;
    ageRange: AGE_RANGE_NUM;
    location: PersonalInfoLocation;
    profilePicOneUrl: string;
    profilePicOneFileType?: string;
    profilePicTwoUrl: ProfilePicTwoUrl;
    profilePicTwoFileType?: string;
}
export declare type PersonalInfoLocation = {
    placeId: string;
    name: MultiLang;
};
export declare class Target {
    targetSex: SEX_NUM;
    targetAgeRange: AGE_RANGE_NUM;
    targetLocation: PersonalInfoLocation;
}
export declare class Friend {
    friendId: string;
    status: FRIEND_STATUS_NUM;
    intimacyLevel: number;
    startFriendDate: Date;
    endFriendDate?: Date;
}
export declare class QuestionChoice {
    id: string;
    choice: MultiLang;
}
export declare class PersonalityScoreRecord {
    key: string;
    score: number;
}
export declare class PaginationEntity {
    constructor(totalPage?: number, data?: Array<any>, page?: number, pageSize?: number);
    totalPage: number;
    page: number;
    pageSize: number;
    data: Array<any>;
}
