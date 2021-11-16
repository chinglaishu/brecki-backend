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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const constant_1 = require("../../constant/constant");
const user_service_1 = require("../../user/user.service");
const public_decorator_1 = require("../decorator/public.decorator");
const jwt_strategy_1 = require("./jwt.strategy");
let JwtAuthGuard = class JwtAuthGuard {
    constructor(reflector, userService) {
        this.reflector = reflector;
        this.userService = userService;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        const token = jwt_strategy_1.default.getTokenFromReq(req);
        const decodeTokenObj = jwt_strategy_1.default.verify(token);
        if (!decodeTokenObj) {
            return false;
        }
        const { userId } = decodeTokenObj;
        const user = await this.userService.findOne(userId);
        if (user) {
            req.user = user;
            req.body[constant_1.DTO_TYPE_NUM_KEY] = user.typeNum;
            return true;
        }
        return false;
    }
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        user_service_1.UserService])
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt.guard.js.map