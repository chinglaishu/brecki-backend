"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDigitNumber = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../../constant/constant");
const cache_1 = require("../../core/cache/cache");
const user_entity_1 = require("../../user/entities/user.entity");
const utilsFunction_1 = require("../../utils/utilsFunction/utilsFunction");
const generateDigitNumber = (digit) => {
    let result = "";
    for (let i = 0; i < digit; i++) {
        result = result + `${Math.ceil(Math.random() * 9)}`;
    }
    return String(result);
};
exports.generateDigitNumber = generateDigitNumber;
const authHelper = {
    async setCodeForUser(cache, useKey, ttl = constant_1.DEFAULT_TTL) {
        const code = (0, exports.generateDigitNumber)(6);
        await cache_1.redisHelper.setRedisKey(cache, useKey, code, ttl);
        console.log(`code: ${code}`);
        return code;
    },
    async checkIfCodeValid(cache, useKey, code, isDelete = true) {
        const storeCode = await cache_1.redisHelper.getRedisKey(cache, useKey);
        const isValid = storeCode && utilsFunction_1.default.compareId(storeCode, code);
        if (!isValid) {
            throw new common_1.HttpException(`code not valid`, 401);
        }
        if (isValid && isDelete) {
            await cache_1.redisHelper.delRedisKey(cache, useKey);
        }
        return isValid;
    },
    generatePassword(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    editEmailContent(content, user) {
        content = content.replace(/{{email}}/g, user.displayName);
        return content;
    },
};
exports.default = authHelper;
//# sourceMappingURL=helper.js.map