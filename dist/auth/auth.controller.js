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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../core/decorator/public.decorator");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./dto/auth.dto");
const user_service_1 = require("../user/user.service");
const jwt_strategy_1 = require("../core/authentication/jwt.strategy");
const crypt_1 = require("../utils/utilsFunction/crypt");
const helper_1 = require("./helper/helper");
const user_decorator_1 = require("../core/decorator/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const config_service_1 = require("../config/config.service");
const lang_decorator_1 = require("../core/decorator/lang.decorator");
const config_1 = require("../constant/config");
const create_user_dto_1 = require("../user/dto/create-user.dto");
const cache_1 = require("../core/cache/cache");
const message_1 = require("../constant/message");
let AuthController = class AuthController {
    constructor(service, userService, configService) {
        this.service = service;
        this.userService = userService;
        this.configService = configService;
    }
    async socialAuth(socialAuthDto) {
        const { accountTypeNum } = socialAuthDto;
        const socialId = await this.service.getSocialIdFromSocialAuth(socialAuthDto);
        let user = await this.userService.findOneWithFilter({ socialId, accountTypeNum });
        if (!user) {
            const createUserDto = { socialId, accountTypeNum: socialAuthDto.accountTypeNum };
            user = await this.userService.create(createUserDto);
        }
        const token = jwt_strategy_1.default.signByUser(user, config_1.ACCESS_TOKEN_EXPIRE_TIME);
        const refreshToken = await this.service.generateRefreshToken(user);
        return { user, token, refreshToken };
    }
    async signupRequest(smsRequestDto, lang) {
        const { phone } = smsRequestDto;
        await this.service.sendCode(cache_1.redisClient, phone, phone, this.configService, lang);
        return true;
    }
    async forgetPasswordToken(body, lang) {
        const { phone } = body;
        const user = await this.userService.findOneWithFilter({ phone }, null, true);
        await this.service.sendCode(cache_1.redisClient, user.id, phone, this.configService, lang);
        return true;
    }
    async checkUserNameAvailable(username, lang) {
        await this.userService.countAndError({ username }, message_1.ErrMessage.usernameExist[lang]);
        return true;
    }
    async signup(signupDto, lang) {
        const { phone, code } = signupDto;
        await helper_1.default.checkIfCodeValid(cache_1.redisClient, phone, code, true);
        const user = await this.service.signup(signupDto, this.userService);
        const token = jwt_strategy_1.default.signByUser(user, config_1.ACCESS_TOKEN_EXPIRE_TIME);
        const refreshToken = await this.service.generateRefreshToken(user);
        return { user, token, refreshToken };
    }
    async SMSVerifyOnly(smsVerifyDto, lang) {
        const { phone, code } = smsVerifyDto;
        await helper_1.default.checkIfCodeValid(cache_1.redisClient, phone, code, false);
        return true;
    }
    async signupSMSVerify(user, smsVerifyDto, lang) {
        const { phone, code } = smsVerifyDto;
        await helper_1.default.checkIfCodeValid(cache_1.redisClient, phone, code, true);
        await this.userService.countAndError({ phone });
        const result = await this.userService.update(user.id, { phone }, true);
        return result;
    }
    async login(loginDto) {
        const { username, password } = loginDto;
        const user = await this.userService.findOneWithFilter({ username }, null, true);
        await crypt_1.default.comparePasswordAndHash(password, user.password);
        const token = jwt_strategy_1.default.signByUser(user, config_1.ACCESS_TOKEN_EXPIRE_TIME);
        const refreshToken = await this.service.generateRefreshToken(user);
        return { user, token, refreshToken };
    }
    async forgetPassword(forgetPasswordDto) {
        const { newPassword, code, username } = forgetPasswordDto;
        const user = await this.userService.findOneWithFilter({ username }, null, true);
        await helper_1.default.checkIfCodeValid(cache_1.redisClient, user.id, code);
        const hashNewPassword = await crypt_1.default.hashPassword(newPassword);
        await this.userService.update(user.id, { password: hashNewPassword });
        return true;
    }
    async resetPassword(resetPasswordDto, user) {
        const { oldPassword, newPassword } = resetPasswordDto;
        await crypt_1.default.comparePasswordAndHash(oldPassword, user.password);
        const hashNewPassword = await crypt_1.default.hashPassword(newPassword);
        await this.userService.update(user.id, { password: hashNewPassword });
        return true;
    }
    async refreshToken(refreshTokenDto, lang) {
        const { refreshToken } = refreshTokenDto;
        const userId = jwt_strategy_1.default.getUserIdFromToken(refreshToken);
        const user = await this.userService.findOne(userId, true);
        const token = await this.service.findOneWithFilter({ refreshToken }, null, false);
        if (!token) {
            await this.service.deleteAllRefreshTokenByUserId(userId);
            throw new common_1.HttpException("token is used or invalid", 500);
        }
        else {
            const newRefreshToken = jwt_strategy_1.default.signByUser(user, config_1.REFERSH_TOKEN_EXPIRE_TIME);
            await this.service.update(token.id, { refreshToken: newRefreshToken }, true);
            const accessToken = jwt_strategy_1.default.signByUser(user, config_1.ACCESS_TOKEN_EXPIRE_TIME);
            return { token: accessToken, refreshToken: newRefreshToken };
        }
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("social-auth"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SocialAuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "socialAuth", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("token/request"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SMSRequestDto, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signupRequest", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("forget-password-token/request"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ForgetPasswordRequestDto, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgetPasswordToken", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)("check-username-available/:username"),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "checkUserNameAvailable", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("signup"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SignupDto, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("token/verify-only"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SMSVerifyDto, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SMSVerifyOnly", null);
__decorate([
    (0, common_1.Post)("phone/verify"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, auth_dto_1.SMSVerifyDto, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signupSMSVerify", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("forget-password"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ForgetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgetPassword", null);
__decorate([
    (0, common_1.Post)("reset-password"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.ReqUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResetPasswordDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)("refresh-token"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RefreshTokenDto, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService,
        config_service_1.ConfigService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map