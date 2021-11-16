import { env } from "./env";

export const VERSION_NUM = "0.0.5";
export const APP_ENV = process.env.APP_ENV || "DEV";

const useEnv = env[APP_ENV];

export const DB_HOST = useEnv.DB_HOST;
export const DB_USERNAME = useEnv.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = useEnv.DB_NAME;

export const PORT = process.env.PORT || "3000";

export const JWT_SECRET = process.env.JWT_SECRET;

export const TWILIO_PHONE_NUM = useEnv.TWILIO_PHONE_NUM;
export const TWILIO_ACCOUNT_SID = useEnv.TWILIO_ACCOUNT_SID;
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

export const REDIS_HOST = useEnv.REDIS_HOST;
export const REDIS_PORT = useEnv.REDIS_PORT;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;

export const ACCESS_TOKEN_EXPIRE_TIME = useEnv.ACCESS_TOKEN_EXPIRE_TIME || "30d";
export const REFERSH_TOKEN_EXPIRE_TIME = useEnv.REFERSH_TOKEN_EXPIRE_TIME || "180d";
export const PASSWORD_SALT_ROUND = 10;

export const GOOGLE_CLIENT_ID = "549401078361-i71620ipt8nljerc5r40lq2u2dmp4mlb.apps.googleusercontent.com";
export const APPLE_CLIENT_SECRET = "AA";
