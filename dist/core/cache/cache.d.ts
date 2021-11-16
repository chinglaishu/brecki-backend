import { RedisClient } from "redis";
export declare const redisClient: RedisClient;
export declare const redisHelper: {
    setRedisKey(cache: RedisClient, key: string, value: any, ttl: number): Promise<unknown>;
    getRedisKey(cache: RedisClient, key: string): Promise<unknown>;
    delRedisKey(cache: RedisClient, key: string): Promise<unknown>;
};
