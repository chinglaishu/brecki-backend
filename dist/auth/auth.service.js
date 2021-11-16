"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const google_auth_library_1 = require("google-auth-library");
const config_1 = require("../constant/config");
const create_user_dto_1 = require("../user/dto/create-user.dto");
const helper_1 = require("./helper/helper");
const config_service_1 = require("../config/config.service");
const constant_1 = require("../constant/constant");
const user_service_1 = require("../user/user.service");
const token_entity_1 = require("./entity/token.entity");
const user_entity_1 = require("../user/entities/user.entity");
const jwt_strategy_1 = require("../core/authentication/jwt.strategy");
const base_service_1 = require("../utils/base/base.service");
const helper_2 = require("../config/helper/helper");
const utilsFunction_1 = require("../utils/utilsFunction/utilsFunction");
const auth_1 = require("../types/auth");
const querystring = require("querystring");
const client = new google_auth_library_1.OAuth2Client(config_1.GOOGLE_CLIENT_ID);
let AuthService = class AuthService extends base_service_1.BaseService {
    constructor(model) {
        super(model);
        this.model = model;
    }
    async getSocialIdFromSocialAuth(socialAuthDto) {
        const { token, clientId, accountTypeNum } = socialAuthDto;
        if (accountTypeNum === constant_1.ACCOUNT_TYPE_NUM.GOOGLE) {
            return await this.getSocialIdFromGoogleToken(token);
        }
        else if (accountTypeNum === constant_1.ACCOUNT_TYPE_NUM.FACEBOOK) {
            return await this.getSocialIdFromFacebookToken(token);
        }
        else if (accountTypeNum === constant_1.ACCOUNT_TYPE_NUM.APPLE) {
            return await this.getSocialIdFromAppleToken(token, clientId);
        }
        throw new common_1.HttpException("account type num error", 500);
    }
    async getSocialIdFromGoogleToken(token) {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: config_1.GOOGLE_CLIENT_ID,
        });
        const { email } = ticket.getPayload();
        return email;
    }
    async getSocialIdFromFacebookToken(token) {
        const url = `https://graph.facebook.com/me?access_token=${token}&fields=id`;
        const result = await utilsFunction_1.default.makeRequest(url, "POST");
        const facebookRes = result.data;
        if (facebookRes.error) {
            throw new common_1.HttpException("Facebook verify error", 500);
        }
        return facebookRes.id;
    }
    async getSocialIdFromAppleToken(token, clientId) {
        const url = `https://appleid.apple.com/auth/token`;
        const body = {
            client_id: clientId,
            client_secret: config_1.APPLE_CLIENT_SECRET,
            code: token,
            grant_type: "authorization_code",
        };
        const result = await utilsFunction_1.default.makeRequest(url, "POST", querystring.stringify(body));
        const appleRes = result.data;
        if (appleRes.error) {
            throw new common_1.HttpException("Apple verify error", 500);
        }
        const decodeToken = jwt_strategy_1.default.decode(appleRes.id_token);
        return decodeToken.sub;
    }
    async sendCode(cache, useKey, to, configService, lang) {
        const token = await helper_1.default.setCodeForUser(cache, useKey);
        const { subject, content, messageMethodNum } = await configService.findByLang(constant_1.CONFIG_TYPE_NUM.VERIFY_CODE, lang);
        const useContent = content.replace(/{{TOKEN}}/g, token);
        await helper_2.default.sendMessage(subject, useContent, to, messageMethodNum);
        return true;
    }
    async signup(signupDto, userService) {
        const { username, password } = signupDto;
        const createUserDto = { username, password };
        const result = await userService.create(createUserDto);
        return result;
    }
    async generateRefreshToken(user) {
        const { id } = user;
        const refreshToken = jwt_strategy_1.default.signByUser(user, config_1.REFERSH_TOKEN_EXPIRE_TIME);
        await this.create({ userId: id, refreshToken });
        return refreshToken;
    }
    async deleteAllRefreshTokenByUserId(userId) {
        return await this.model.deleteMany({ userId });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(token_entity_1.Token.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map