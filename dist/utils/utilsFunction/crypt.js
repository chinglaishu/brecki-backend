"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const config_1 = require("../../constant/config");
const crypt = {
    async hashPassword(password) {
        return await bcrypt.hash(password, config_1.PASSWORD_SALT_ROUND);
    },
    async comparePasswordAndHash(password, hash, throwErrorIfNotMatch = true) {
        const isMatch = await bcrypt.compare(password, hash);
        if (!isMatch && throwErrorIfNotMatch) {
            throw new common_1.HttpException("password incorrect", 401);
        }
        return isMatch;
    },
};
exports.default = crypt;
//# sourceMappingURL=crypt.js.map