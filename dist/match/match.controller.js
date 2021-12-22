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
exports.MatchController = void 0;
const common_1 = require("@nestjs/common");
const match_service_1 = require("./match.service");
const base_controller_1 = require("../utils/base/base.controller");
const filter_1 = require("../core/filter/filter");
const user_decorator_1 = require("../core/decorator/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const lang_decorator_1 = require("../core/decorator/lang.decorator");
const constant_1 = require("../constant/constant");
const user_service_1 = require("../user/user.service");
const notification_1 = require("../core/notification/notification");
const notificationMessage_1 = require("../constant/notificationMessage");
let MatchController = class MatchController extends base_controller_1.BaseController {
    constructor(service, userService) {
        super(service);
        this.service = service;
        this.userService = userService;
        this.findOneCheckUser = true;
        this.findAllCheckUser = true;
        this.updateCheckUser = false;
    }
    async acceptMatch(user, id, lang) {
        const match = await this.service.findOne(id);
        if (match.toUserId !== user.id && user.roleNum !== constant_1.ROLE_NUM.ADMIN) {
            throw new common_1.HttpException("User do not have permission", 500);
        }
        const result = await this.service.update(id, { status: constant_1.MATCH_STATUS_NUM.ACCEPTED }, true);
        await (0, notification_1.sendPushNotificationByUserId)(match.userId, this.userService, "SOME_ONE_ACCEPT_YOU");
        return result;
    }
    async rejectMatch(user, id, lang) {
        const match = await this.service.findOne(id);
        if (match.toUserId !== user.id && user.roleNum !== constant_1.ROLE_NUM.ADMIN) {
            throw new common_1.HttpException("User do not have permission", 500);
        }
        const result = await this.service.update(id, { status: constant_1.MATCH_STATUS_NUM.REJECTED }, true);
        return result;
    }
    async blockMatch(user, id, lang) {
        const match = await this.service.findOne(id);
        if (match.toUserId !== user.id && match.userId !== user.id && user.roleNum !== constant_1.ROLE_NUM.ADMIN) {
            throw new common_1.HttpException("User do not have permission", 500);
        }
        const isAlreadyBlocked = match.blockedIds.includes(user.id);
        if (isAlreadyBlocked) {
            throw new common_1.HttpException("Already blocked", 500);
        }
        const result = await this.service.update(id, { status: constant_1.MATCH_STATUS_NUM.SOMEONE_BLOCK, blockedIds: [...match.blockedIds, user.id] }, true);
        return result;
    }
    async unblockMatch(user, id, lang) {
        const match = await this.service.findOne(id);
        if (match.toUserId !== user.id && match.userId !== user.id && user.roleNum !== constant_1.ROLE_NUM.ADMIN) {
            throw new common_1.HttpException("User do not have permission", 500);
        }
        const index = match.blockedIds.indexOf(user.id);
        if (match.status !== constant_1.MATCH_STATUS_NUM.SOMEONE_BLOCK || index === -1) {
            throw new common_1.HttpException("Status Error, not blocked", 500);
        }
        const newBlockedIds = JSON.parse(JSON.stringify(match.blockedIds));
        newBlockedIds.splice(index, 1);
        const useStatus = newBlockedIds.length === 0 ? constant_1.MATCH_STATUS_NUM.ACCEPTED : constant_1.MATCH_STATUS_NUM.SOMEONE_BLOCK;
        const result = await this.service.update(id, { status: useStatus, blockedIds: newBlockedIds }, true);
        return result;
    }
    async quitMatch(user, id, lang) {
        const match = await this.service.findOne(id);
        if (match.toUserId !== user.id && match.userId !== user.id && user.roleNum !== constant_1.ROLE_NUM.ADMIN) {
            throw new common_1.HttpException("User do not have permission", 500);
        }
        const isAlreadyQuited = match.quitedIds.includes(user.id);
        if (isAlreadyQuited) {
            throw new common_1.HttpException("Already Quited", 500);
        }
        const result = await this.service.update(id, { status: constant_1.MATCH_STATUS_NUM.SOMEONE_QUIT, quitedIds: [...match.quitedIds, user.id] }, true);
        return result;
    }
};
__decorate([
    (0, common_1.Post)("accept-match/:id"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "acceptMatch", null);
__decorate([
    (0, common_1.Post)("reject-match/:id"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "rejectMatch", null);
__decorate([
    (0, common_1.Post)("block-match/:id"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "blockMatch", null);
__decorate([
    (0, common_1.Post)("unblock-match/:id"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "unblockMatch", null);
__decorate([
    (0, common_1.Post)("quit-match/:id"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "quitMatch", null);
MatchController = __decorate([
    (0, common_1.Controller)('match'),
    __metadata("design:paramtypes", [match_service_1.MatchService,
        user_service_1.UserService])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map