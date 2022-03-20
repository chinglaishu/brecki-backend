declare type Env = {
    DB_USERNAME: string;
    DB_HOST: string;
    DB_NAME: string;
    ACCESS_TOKEN_EXPIRE_TIME: string;
    REFERSH_TOKEN_EXPIRE_TIME: string;
    REDIS_HOST: string;
    REDIS_PORT: string;
    REDIS_PASSWORD?: string;
    TWILIO_PHONE_NUM: string;
    TWILIO_ACCOUNT_SID: string;
    PORT: number;
};
export declare const env: {
    [key: string]: Env;
};
export {};
