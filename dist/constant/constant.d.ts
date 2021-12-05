import { MultiLang } from "src/utils/base/base.entity";
export declare const GLOBALPREFIX = "api";
export declare const AUTH_HEADER = "authorization";
export declare const TIMEZONE = "Asia/Hong_Kong";
export declare const DEFAULT_LANGUAGE: LANGUAGE;
export declare const LANG_HEADER = "accept-language";
export declare const GET_ALL_KEY = "isGetAll";
export declare const DTO_TYPE_NUM_KEY = "dto_typeNum";
export declare const DTO_CHECK_ADMIN_FIELD_KEY = "dto-check-admin";
export declare const DEFAULT_PAGE_SIZE = 20;
export declare const DEFAULT_TTL = 3600;
export declare const MAX_INTIMACY_LEVEL = 10;
export declare const USER_ID_FIELD = "userId";
export declare const S3_PROFILE_PIC_ONE_PATH = "profile-pic-one";
export declare const S3_PROFILE_PIC_TWO_CLEAR_PATH = "profile-pic-two-clear";
export declare const S3_PROFILE_PIC_TWO_BLUR_LESS_PATH = "profile-pic-two-blur-less";
export declare const S3_PROFILE_PIC_TWO_BLUR_MORE_PATH = "profile-pic-two-blur-more";
export declare type LANGUAGE = "en" | "zh";
export declare const DEFAULT_MULTILANG: MultiLang;
export declare type ACCOUNT_TYPE_NUM = 0 | 1 | 2 | 3;
export declare const ACCOUNT_TYPE_NUM: {
    NORMAL: ACCOUNT_TYPE_NUM;
    GOOGLE: ACCOUNT_TYPE_NUM;
    FACEBOOK: ACCOUNT_TYPE_NUM;
    APPLE: ACCOUNT_TYPE_NUM;
};
export declare type SEX_NUM = 0 | 1 | 2;
export declare const SEX_NUM: {
    MALE: SEX_NUM;
    FEMALE: SEX_NUM;
    OTHER: SEX_NUM;
};
export declare const SEX_NUM_REF: {
    0: string;
    1: string;
    2: string;
};
export declare type WEEK_DAY_NUM = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export declare const WEEK_DAY_NUM: {
    SUN: WEEK_DAY_NUM;
    MON: WEEK_DAY_NUM;
    TUE: WEEK_DAY_NUM;
    WED: WEEK_DAY_NUM;
    THU: WEEK_DAY_NUM;
    FRI: WEEK_DAY_NUM;
    SAT: WEEK_DAY_NUM;
};
export declare type ROLE_NUM = 0 | 1 | 2;
export declare const ROLE_NUM: {
    ADMIN: ROLE_NUM;
    USER: ROLE_NUM;
    GUEST: ROLE_NUM;
};
export declare type CONFIG_TYPE_NUM = 0 | 1 | 2;
export declare const CONFIG_TYPE_NUM: {
    VERIFY_CODE: CONFIG_TYPE_NUM;
    SIGNUP_SUCCESS: CONFIG_TYPE_NUM;
    REUSE_REFRESH_TOKEN: CONFIG_TYPE_NUM;
};
export declare type MESSAGE_METHOD_NUM = 0 | 1;
export declare const MESSAGE_METHOD_NUM: {
    EMAIL: MESSAGE_METHOD_NUM;
    SMS: MESSAGE_METHOD_NUM;
};
export declare type AGE_RANGE_NUM = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export declare const AGE_RANGE_NUM: {
    "below20": AGE_RANGE_NUM;
    "20to25": AGE_RANGE_NUM;
    "25to29": AGE_RANGE_NUM;
    "30to35": AGE_RANGE_NUM;
    "35to39": AGE_RANGE_NUM;
    "40to45": AGE_RANGE_NUM;
    "45to50": AGE_RANGE_NUM;
    "over50": AGE_RANGE_NUM;
};
export declare type FRIEND_STATUS_NUM = -1 | 0;
export declare const FRIEND_STATUS_NUM: {
    friend_quit: FRIEND_STATUS_NUM;
    normal: FRIEND_STATUS_NUM;
};
export declare type MATCH_STATUS_NUM = -1 | 0 | 1;
export declare const MATCH_STATUS_NUM: {
    REJECTED: MATCH_STATUS_NUM;
    WAITING: MATCH_STATUS_NUM;
    ACCEPTED: MATCH_STATUS_NUM;
};
export declare type MATCH_METHOD_NUM = 0 | 1;
export declare const MATCH_METHOD_NUM: {
    SYSTEM: MATCH_METHOD_NUM;
    MANUAL: MATCH_METHOD_NUM;
};
export declare type QUESTION_TYPE_NUM = 0 | 1;
export declare const QUESTION_TYPE_NUM: {
    CHOICE: QUESTION_TYPE_NUM;
    PAINT: QUESTION_TYPE_NUM;
};
