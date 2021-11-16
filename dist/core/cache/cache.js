"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisHelper = exports.redisClient = void 0;
const redis_1 = require("redis");
const config_1 = require("../../constant/config");
const createRedisClient = () => {
    if (config_1.APP_ENV === "TEST") {
        return null;
    }
    return (0, redis_1.createClient)({
        url: `redis://${config_1.REDIS_PASSWORD}@${config_1.REDIS_HOST}:${config_1.REDIS_PORT}`,
    });
};
exports.redisClient = createRedisClient();
exports.redisHelper = {
    async setRedisKey(cache, key, value, ttl) {
        return new Promise((resolve, reject) => {
            cache.set(key, value, "EX", ttl, (err, val) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (val == null) {
                    resolve(null);
                    return;
                }
                try {
                    resolve(JSON.parse(val));
                }
                catch (ex) {
                    resolve(val);
                }
            });
        });
    },
    async getRedisKey(cache, key) {
        return new Promise((resolve, reject) => {
            cache.get(key, (err, val) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (val == null) {
                    resolve(null);
                    return;
                }
                try {
                    resolve(JSON.parse(val));
                }
                catch (ex) {
                    resolve(val);
                }
            });
        });
    },
    async delRedisKey(cache, key) {
        return new Promise((resolve, reject) => {
            cache.del(key, (err, val) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (val == null) {
                    resolve(null);
                    return;
                }
                try {
                    resolve(val);
                }
                catch (ex) {
                    resolve(val);
                }
            });
        });
    }
};
//# sourceMappingURL=cache.js.map