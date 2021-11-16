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
export declare class PersonalInfo {
    sex: SEX_NUM;
    ageRange: AGE_RANGE_NUM;
    country: Location;
    city: Location;
    profilePicOneUrl: string;
    profilePicTwoUrl: string;
}
export declare class Location {
    placeId: string;
    name: MultiLang;
}
export declare class Target {
    targetSexs: SEX_NUM[];
    targetAgeRanges: AGE_RANGE_NUM[];
    targetLocations: Location[];
}
export declare class Friend {
    friendId: string;
    status: FRIEND_STATUS_NUM;
    intimacyLevel: number;
    startFriendDate: Date;
    endFriendDate?: Date;
}
export declare class PaginationEntity {
    constructor(totalPage?: number, data?: Array<any>, page?: number, pageSize?: number);
    totalPage: number;
    page: number;
    pageSize: number;
    data: Array<any>;
}
