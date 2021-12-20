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
const create_match_dto_1 = require("./dto/create-match.dto");
const update_match_dto_1 = require("./dto/update-match.dto");
const base_controller_1 = require("../utils/base/base.controller");
const filter_1 = require("../core/filter/filter");
const user_decorator_1 = require("../core/decorator/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const lang_decorator_1 = require("../core/decorator/lang.decorator");
const constant_1 = require("../constant/constant");
const user_service_1 = require("../user/user.service");
let MatchController = class MatchController extends base_controller_1.BaseController {
    constructor(service, userService) {
        super(service);
        this.service = service;
        this.userService = userService;
        this.findOneCheckUser = true;
        this.findAllCheckUser = true;
    }
    async create(user, createMatchDto, lang) {
        if (user.roleNum !== constant_1.ROLE_NUM.ADMIN || !createMatchDto.userId) {
            createMatchDto.userId = user.id;
        }
        const { userId, toUserId } = createMatchDto;
        await this.service.countAndError({ userId, toUserId });
        return this.service.create(createMatchDto);
    }
    async update(user, id, updateMatchDto, lang) {
        const { status } = updateMatchDto;
        const match = await this.service.findOne(id, true, user);
        const { userId, toUserId } = match;
        if (status === constant_1.MATCH_STATUS_NUM.ACCEPTED) {
            const fromUser = await this.userService.findOne(userId, true);
            const toUser = await this.userService.findOne(toUserId, true);
            await this.userService.addUserToFriendList(fromUser, toUserId);
            await this.userService.addUserToFriendList(toUser, userId);
        }
        return await this.service.update(id, updateMatchDto, true, user);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, create_match_dto_1.CreateMatchDto, String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, update_match_dto_1.UpdateMatchDto, String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "update", null);
MatchController = __decorate([
    (0, common_1.Controller)('match'),
    __metadata("design:paramtypes", [match_service_1.MatchService,
        user_service_1.UserService])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map