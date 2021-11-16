"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../constant/config");
const jwt = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
const constant_1 = require("../../constant/constant");
const user_entity_1 = require("../../user/entities/user.entity");
const common_2 = require("../../types/common");
const auth_1 = require("../../types/auth");
const JwtStrategy = {
    sign(userId, expireTime) {
        return jwt.sign({ userId }, config_1.JWT_SECRET, { expiresIn: expireTime });
    },
    signByUser(user, expireTime) {
        const { id } = user;
        return this.sign(id, expireTime);
    },
    verify(token) {
        try {
            return jwt.verify(token, config_1.JWT_SECRET);
        }
        catch (err) {
            return false;
        }
    },
    getUserIdFromToken(token) {
        const decodeTokenObj = JwtStrategy.verify(token);
        if (!decodeTokenObj) {
            throw new common_1.HttpException("not valid token", 500);
        }
        const { userId } = decodeTokenObj;
        return userId;
    },
    getTokenFromReq(req) {
        const { headers } = req;
        const token = headers[constant_1.AUTH_HEADER];
        return token;
    },
    decode(token) {
        return (jwt.decode(token));
    },
};
exports.default = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map