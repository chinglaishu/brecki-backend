"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MATCH_METHOD_NUM = exports.MATCH_STATUS_NUM = exports.FRIEND_STATUS_NUM = exports.AGE_RANGE_NUM = exports.MESSAGE_METHOD_NUM = exports.CONFIG_TYPE_NUM = exports.ROLE_NUM = exports.WEEK_DAY_NUM = exports.SEX_NUM_REF = exports.SEX_NUM = exports.ACCOUNT_TYPE_NUM = exports.USER_ID_FIELD = exports.MAX_INTIMACY_LEVEL = exports.DEFAULT_TTL = exports.DEFAULT_PAGE_SIZE = exports.DTO_CHECK_ADMIN_FIELD_KEY = exports.DTO_TYPE_NUM_KEY = exports.GET_ALL_KEY = exports.LANG_HEADER = exports.DEFAULT_LANGUAGE = exports.TIMEZONE = exports.AUTH_HEADER = exports.GLOBALPREFIX = void 0;
exports.GLOBALPREFIX = 'api';
exports.AUTH_HEADER = "authorization";
exports.TIMEZONE = "Asia/Hong_Kong";
exports.DEFAULT_LANGUAGE = "en";
exports.LANG_HEADER = "accept-language";
exports.GET_ALL_KEY = "isGetAll";
exports.DTO_TYPE_NUM_KEY = "dto_typeNum";
exports.DTO_CHECK_ADMIN_FIELD_KEY = "dto-check-admin";
exports.DEFAULT_PAGE_SIZE = 20;
exports.DEFAULT_TTL = 3600;
exports.MAX_INTIMACY_LEVEL = 10;
exports.USER_ID_FIELD = "userId";
exports.ACCOUNT_TYPE_NUM = {
    NORMAL: 0,
    GOOGLE: 1,
    FACEBOOK: 2,
    APPLE: 3,
};
exports.SEX_NUM = {
    MALE: 0,
    FEMALE: 1,
    OTHER: 2,
};
exports.SEX_NUM_REF = {
    0: "Male",
    1: "Female",
    2: "Other",
};
exports.WEEK_DAY_NUM = {
    SUN: 0,
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
};
exports.ROLE_NUM = {
    ADMIN: 0,
    USER: 1,
    GUEST: 2,
};
exports.CONFIG_TYPE_NUM = {
    VERIFY_CODE: 0,
    SIGNUP_SUCCESS: 1,
    REUSE_REFRESH_TOKEN: 2,
};
exports.MESSAGE_METHOD_NUM = {
    EMAIL: 0,
    SMS: 1,
};
exports.AGE_RANGE_NUM = {
    "below20": 0,
    "20to25": 1,
    "25to29": 2,
    "30to35": 3,
    "35to39": 4,
    "40to45": 5,
    "45to50": 6,
    "over50": 7,
};
exports.FRIEND_STATUS_NUM = {
    friend_quit: -1,
    normal: 0,
};
exports.MATCH_STATUS_NUM = {
    REJECTED: -1,
    WAITING: 0,
    ACCEPTED: 1,
};
exports.MATCH_METHOD_NUM = {
    SYSTEM: 0,
    MANUAL: 1,
};
//# sourceMappingURL=constant.js.map