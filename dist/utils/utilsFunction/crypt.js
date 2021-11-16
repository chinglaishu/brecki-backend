"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const config_1 = require("../../constant/config");
const crypt = {
    async hashPassword(password) {
        return await bcryptjs_1.default.hash(password, config_1.PASSWORD_SALT_ROUND);
    },
    async comparePasswordAndHash(password, hash, throwErrorIfNotMatch = true) {
        const isMatch = await bcryptjs_1.default.compare(password, hash);
        if (!isMatch && throwErrorIfNotMatch) {
            throw new common_1.HttpException("password incorrect", 401);
        }
        return isMatch;
    },
};
exports.default = crypt;
//# sourceMappingURL=crypt.js.map