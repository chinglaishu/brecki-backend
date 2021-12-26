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
exports.SystemMatchController = void 0;
const common_1 = require("@nestjs/common");
const systemMatch_service_1 = require("./systemMatch.service");
const base_controller_1 = require("../utils/base/base.controller");
const filter_1 = require("../core/filter/filter");
const user_decorator_1 = require("../core/decorator/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const user_service_1 = require("../user/user.service");
const helper_1 = require("./helper/helper");
const constant_1 = require("../constant/constant");
const moment = require("moment-timezone");
const lang_decorator_1 = require("../core/decorator/lang.decorator");
const notification_1 = require("../core/notification/notification");
const utilsFunction_1 = require("../utils/utilsFunction/utilsFunction");
const match_service_1 = require("../match/match.service");
let SystemMatchController = class SystemMatchController extends base_controller_1.BaseController {
    constructor(service, userService, matchService) {
        super(service);
        this.service = service;
        this.userService = userService;
        this.matchService = matchService;
        this.findOneCheckUser = true;
        this.findAllCheckUser = true;
    }
    async requestSystemMatch(user, query) {
        const { withPreference } = query;
        const systemMatch = await this.service.findOneWithFilter({ userId: user.id });
        if (systemMatch) {
            helper_1.default.checkTime(systemMatch.updatedAt, constant_1.SYSTEM_MATCH_VALID_AFTER_MINS);
        }
        const users = await this.userService.getRandomWithPerference(user, withPreference, constant_1.SYSTEM_MATCH_NUM);
        const matchUserIds = users.map((user) => user.id);
        if (!systemMatch) {
            return await this.service.create({ matchUserIds }, user);
        }
        return await this.service.update(systemMatch.id, { matchUserIds, updatedAt: moment().toDate() }, true, user);
    }
    async getSelfSystemMatch(user) {
        const systemMatch = await this.service.findOneWithFilter({ userId: user.id });
        return systemMatch;
    }
    async createMatch(user, toUserId, query, lang) {
        const systemMatch = await this.service.findOneWithFilter({ userId: user.id }, null, true);
        const { matchUserIds } = systemMatch;
        const useMatchUserIds = utilsFunction_1.default.getRemovedItemArray(matchUserIds, toUserId);
        const result = await this.service.update(systemMatch.id, { matchUserIds: useMatchUserIds });
        await this.matchService.create({ userIds: [user.id, toUserId], method: constant_1.MATCH_METHOD_NUM.SYSTEM });
        return result;
    }
};
__decorate([
    (0, common_1.Get)("request"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], SystemMatchController.prototype, "requestSystemMatch", null);
__decorate([
    (0, common_1.Get)("self"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], SystemMatchController.prototype, "getSelfSystemMatch", null);
__decorate([
    (0, common_1.Post)("create-match/:toUserId"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)("toUserId")),
    __param(2, (0, common_1.Query)()),
    __param(3, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, Object, String]),
    __metadata("design:returntype", Promise)
], SystemMatchController.prototype, "createMatch", null);
SystemMatchController = __decorate([
    (0, common_1.Controller)('system-match'),
    __metadata("design:paramtypes", [systemMatch_service_1.SystemMatchService,
        user_service_1.UserService,
        match_service_1.MatchService])
], SystemMatchController);
exports.SystemMatchController = SystemMatchController;
//# sourceMappingURL=systemMatch.controller.js.map