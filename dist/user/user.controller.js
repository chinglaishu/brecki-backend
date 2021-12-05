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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const base_controller_1 = require("../utils/base/base.controller");
const public_decorator_1 = require("../core/decorator/public.decorator");
const filter_1 = require("../core/filter/filter");
const user_decorator_1 = require("../core/decorator/user.decorator");
const user_entity_1 = require("./entities/user.entity");
const filter_decorator_1 = require("../core/decorator/filter.decorator");
const pagination_decorator_1 = require("../core/decorator/pagination.decorator");
const role_decorator_1 = require("../core/authorization/role.decorator");
const role_enum_1 = require("../core/authorization/role.enum");
const sort_decorator_1 = require("../core/decorator/sort.decorator");
const search_decorator_1 = require("../core/decorator/search.decorator");
const constant_1 = require("../constant/constant");
const lang_decorator_1 = require("../core/decorator/lang.decorator");
const uploadImage_1 = require("../core/uploadImage/uploadImage");
const base_entity_1 = require("../utils/base/base.entity");
const imageHandler_1 = require("../utils/utilsFunction/imageHandler");
var Jimp = require("jimp");
var path = require('path');
let UserController = class UserController extends base_controller_1.BaseController {
    constructor(service) {
        super(service);
        this.service = service;
    }
    findSelf(user) {
        return user;
    }
    findAll(user, filter, pagination, sort, search) {
        const { page, pageSize } = pagination;
        const { searchFilter } = search;
        filter = Object.assign(Object.assign({}, filter), searchFilter);
        return this.service.findAll(filter, page, pageSize, null, sort);
    }
    async create(user, createDto, lang) {
        const result = await this.service.create(createDto);
        return result;
    }
    async findOne(user, id) {
        await this.service.checkIsIdOfUser(user, id);
        return this.service.findOne(id);
    }
    async checkItemExist(filter, lang) {
        const count = await this.service.count(filter);
        return count > 0;
    }
    async update(user, id, updateDto) {
        await this.service.checkIsIdOfUser(user, id);
        const result = await this.service.update(id, updateDto);
        return result;
    }
    async remove(user, id) {
        await this.service.checkIsIdOfUser(user, id);
        return this.service.remove(id);
    }
    async uploadProfilePicOne(body) {
        const { base64, fileType } = body;
        const buffer = Buffer.from(base64, "base64");
        const result = await (0, uploadImage_1.uploadImage)(constant_1.S3_PROFILE_PIC_ONE_PATH, fileType, buffer);
        return result.Location;
    }
    async uploadProfilePicTwo(body) {
        const { base64, fileType } = body;
        const buffer = Buffer.from(base64, "base64");
        const image = await Jimp.read(buffer);
        const blurLessBuffer = await (0, imageHandler_1.changeImageAndGetBuffer)(image, 1);
        const blurMoreBuffer = await (0, imageHandler_1.changeImageAndGetBuffer)(image, 4);
        const uploadClearResult = await (0, uploadImage_1.uploadImage)(constant_1.S3_PROFILE_PIC_TWO_CLEAR_PATH, fileType, buffer);
        const uploadBlurLessResult = await (0, uploadImage_1.uploadImage)(constant_1.S3_PROFILE_PIC_TWO_BLUR_LESS_PATH, "png", blurLessBuffer);
        const uploadBlurMoreResult = await (0, uploadImage_1.uploadImage)(constant_1.S3_PROFILE_PIC_TWO_BLUR_MORE_PATH, "png", blurMoreBuffer);
        const profilePicTwoUrl = {
            clear: uploadClearResult.Location,
            blurLess: uploadBlurLessResult.Location,
            blurMore: uploadBlurMoreResult.Location,
        };
        return profilePicTwoUrl;
    }
};
__decorate([
    (0, common_1.Get)('self'),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findSelf", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, filter_decorator_1.Filter)()),
    __param(2, (0, pagination_decorator_1.Pagination)()),
    __param(3, (0, sort_decorator_1.Sort)()),
    __param(4, (0, search_decorator_1.Search)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, filter_1.UserFilterOption, pagination_decorator_1.PageOption, Object, search_decorator_1.SearchOption]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, create_user_dto_1.CreateUserDto, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/item-exist'),
    __param(0, (0, filter_decorator_1.Filter)()),
    __param(1, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_1.UserFilterOption, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkItemExist", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)("upload/profile-pic-one"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UploadProfilePicDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadProfilePicOne", null);
__decorate([
    (0, common_1.Post)("upload/profile-pic-two"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UploadProfilePicDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadProfilePicTwo", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map