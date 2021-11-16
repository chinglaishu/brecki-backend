"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APPLE_CLIENT_SECRET = exports.GOOGLE_CLIENT_ID = exports.PASSWORD_SALT_ROUND = exports.REFERSH_TOKEN_EXPIRE_TIME = exports.ACCESS_TOKEN_EXPIRE_TIME = exports.REDIS_PASSWORD = exports.REDIS_PORT = exports.REDIS_HOST = exports.TWILIO_AUTH_TOKEN = exports.TWILIO_ACCOUNT_SID = exports.TWILIO_PHONE_NUM = exports.JWT_SECRET = exports.PORT = exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_HOST = exports.APP_ENV = exports.VERSION_NUM = void 0;
const env_1 = require("./env");
exports.VERSION_NUM = "0.0.5";
exports.APP_ENV = process.env.APP_ENV || "DEV";
const useEnv = env_1.env[exports.APP_ENV];
exports.DB_HOST = useEnv.DB_HOST;
exports.DB_USERNAME = useEnv.DB_USERNAME;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_NAME = useEnv.DB_NAME;
exports.PORT = process.env.PORT || "3000";
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.TWILIO_PHONE_NUM = useEnv.TWILIO_PHONE_NUM;
exports.TWILIO_ACCOUNT_SID = useEnv.TWILIO_ACCOUNT_SID;
exports.TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
exports.REDIS_HOST = useEnv.REDIS_HOST;
exports.REDIS_PORT = useEnv.REDIS_PORT;
exports.REDIS_PASSWORD = process.env.REDIS_PASSWORD;
exports.ACCESS_TOKEN_EXPIRE_TIME = useEnv.ACCESS_TOKEN_EXPIRE_TIME || "30d";
exports.REFERSH_TOKEN_EXPIRE_TIME = useEnv.REFERSH_TOKEN_EXPIRE_TIME || "180d";
exports.PASSWORD_SALT_ROUND = 10;
exports.GOOGLE_CLIENT_ID = "549401078361-i71620ipt8nljerc5r40lq2u2dmp4mlb.apps.googleusercontent.com";
exports.APPLE_CLIENT_SECRET = "AA";
//# sourceMappingURL=config.js.map