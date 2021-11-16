
type Env = {
  DB_USERNAME: string,
  DB_HOST: string,
  DB_NAME: string,
  ACCESS_TOKEN_EXPIRE_TIME: string,
  REFERSH_TOKEN_EXPIRE_TIME: string,
  
  REDIS_HOST: string,
  REDIS_PORT: string,
  REDIS_PASSWORD: string,
  
  TWILIO_PHONE_NUM: string,
  TWILIO_ACCOUNT_SID: string,
  TWILIO_AUTH_TOKEN: string,
  
  PORT: number,
};

export const env: {[key: string]: Env} = {
  DEV: {
    DB_USERNAME: "testuser",
    DB_HOST: "brecki-dev-cluster.3zse3.mongodb.net",
    DB_NAME: "brecki-dev-db",
    ACCESS_TOKEN_EXPIRE_TIME: "30d",
    REFERSH_TOKEN_EXPIRE_TIME: "180d",
    
    REDIS_HOST: "phasesci-cache-uat.redis.cache.windows.net",
    REDIS_PORT: "6379",
    REDIS_PASSWORD: "fGOf8ZjkK6gdecEEZEmtpWF080tNCEhh6pjtZkcVldA",
    
    TWILIO_PHONE_NUM: "(847) 582-4236",
    TWILIO_ACCOUNT_SID: "AC295832dde25faaf4f56d7c99d309ff4a",
    TWILIO_AUTH_TOKEN: "588fc61f043bc6823743fc03eeecd909",
    
    PORT: 3000,
  },
  UAT: {
    DB_USERNAME: "testuser",
    DB_HOST: "brecki-dev-cluster.3zse3.mongodb.net",
    DB_NAME: "brecki-dev-db",
    ACCESS_TOKEN_EXPIRE_TIME: "30d",
    REFERSH_TOKEN_EXPIRE_TIME: "180d",
    
    REDIS_HOST: "phasesci-cache-uat.redis.cache.windows.net",
    REDIS_PORT: "6379",
    REDIS_PASSWORD: "fGOf8ZjkK6gdecEEZEmtpWF080tNCEhh6pjtZkcVldA",
    
    TWILIO_PHONE_NUM: "(847) 582-4236",
    TWILIO_ACCOUNT_SID: "AC295832dde25faaf4f56d7c99d309ff4a",
    TWILIO_AUTH_TOKEN: "588fc61f043bc6823743fc03eeecd909",
    
    PORT: 3000,
  },
  PROD: {
    DB_USERNAME: "testuser",
    DB_HOST: "brecki-dev-cluster.3zse3.mongodb.net",
    DB_NAME: "brecki-dev-db",
    ACCESS_TOKEN_EXPIRE_TIME: "30d",
    REFERSH_TOKEN_EXPIRE_TIME: "180d",
    
    REDIS_HOST: "phasesci-cache-uat.redis.cache.windows.net",
    REDIS_PORT: "6379",
    REDIS_PASSWORD: "fGOf8ZjkK6gdecEEZEmtpWF080tNCEhh6pjtZkcVldA",
    
    TWILIO_PHONE_NUM: "(847) 582-4236",
    TWILIO_ACCOUNT_SID: "AC295832dde25faaf4f56d7c99d309ff4a",
    TWILIO_AUTH_TOKEN: "588fc61f043bc6823743fc03eeecd909",
    
    PORT: 3000,
  },
};
