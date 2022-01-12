"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOTIFICATION_TYPE = exports.MANUAL_MATCH_VALID_AFTER_MINS = exports.SYSTEM_MATCH_VALID_AFTER_MINS = exports.MANUAL_MATCH_NUM = exports.SYSTEM_MATCH_NUM = exports.QUESTION_TYPE_NUM = exports.MATCH_METHOD_NUM = exports.MATCH_STATUS_NUM = exports.FRIEND_STATUS_NUM = exports.AGE_RANGE_NUM = exports.MESSAGE_METHOD_NUM = exports.CONFIG_TYPE_NUM = exports.ROLE_NUM = exports.WEEK_DAY_NUM = exports.SEX_NUM_REF = exports.SEX_NUM = exports.ACCOUNT_TYPE_NUM = exports.DEFAULT_MULTILANG = exports.S3_PROFILE_PIC_TWO_BLUR_MORE_PATH = exports.S3_PROFILE_PIC_TWO_BLUR_LESS_PATH = exports.S3_PROFILE_PIC_TWO_CLEAR_PATH = exports.S3_PROFILE_PIC_ONE_PATH = exports.USER_ID_FIELD = exports.PAINT_WEIGHT = exports.IMAGE_WEIGHT = exports.VOICE_WEIGHT = exports.TEXT_WEIGHT = exports.MAX_INTIMACY_LEVEL = exports.DEFAULT_TTL = exports.DEFAULT_PAGE_SIZE = exports.DTO_CHECK_ADMIN_FIELD_KEY = exports.DTO_TYPE_NUM_KEY = exports.GET_ALL_KEY = exports.LANG_HEADER = exports.DEFAULT_LANGUAGE = exports.TIMEZONE = exports.AUTH_HEADER = exports.GLOBALPREFIX = void 0;
const base_entity_1 = require("../utils/base/base.entity");
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
exports.MAX_INTIMACY_LEVEL = 1000;
exports.TEXT_WEIGHT = 1;
exports.VOICE_WEIGHT = 2;
exports.IMAGE_WEIGHT = 10;
exports.PAINT_WEIGHT = 20;
exports.USER_ID_FIELD = "userId";
exports.S3_PROFILE_PIC_ONE_PATH = "profile-pic-one";
exports.S3_PROFILE_PIC_TWO_CLEAR_PATH = "profile-pic-two-clear";
exports.S3_PROFILE_PIC_TWO_BLUR_LESS_PATH = "profile-pic-two-blur-less";
exports.S3_PROFILE_PIC_TWO_BLUR_MORE_PATH = "profile-pic-two-blur-more";
exports.DEFAULT_MULTILANG = {
    en: "",
    zh: "",
};
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
    SOMEONE_QUIT: -2,
    SOMEONE_BLOCK: -1,
    NORMAL: 0,
};
exports.MATCH_METHOD_NUM = {
    SYSTEM: 0,
    MANUAL: 1,
};
exports.QUESTION_TYPE_NUM = {
    CHOICE: 0,
    PAINT: 1,
};
exports.SYSTEM_MATCH_NUM = 8;
exports.MANUAL_MATCH_NUM = 1;
exports.SYSTEM_MATCH_VALID_AFTER_MINS = 2;
exports.MANUAL_MATCH_VALID_AFTER_MINS = 1;
exports.NOTIFICATION_TYPE = {
    QUESTION_SCORE: "question-score",
    MATCH_INVITATION: "match-invitation",
    MATCH_ACCEPT: "match-accept",
};
//# sourceMappingURL=constant.js.map