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
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../../constant/constant");
const filter_decorator_1 = require("../../core/decorator/filter.decorator");
const lang_decorator_1 = require("../../core/decorator/lang.decorator");
const pagination_decorator_1 = require("../../core/decorator/pagination.decorator");
const public_decorator_1 = require("../../core/decorator/public.decorator");
const search_decorator_1 = require("../../core/decorator/search.decorator");
const sort_decorator_1 = require("../../core/decorator/sort.decorator");
const user_decorator_1 = require("../../core/decorator/user.decorator");
const user_entity_1 = require("../../user/entities/user.entity");
const utilsFunction_1 = require("../utilsFunction/utilsFunction");
class BaseController {
    constructor(service, findOneCheckUser = false, findAllCheckUser = false, updateCheckUser = true, readOnly = false) {
        this.service = service;
        this.findOneCheckUser = findOneCheckUser;
        this.findAllCheckUser = findAllCheckUser;
        this.updateCheckUser = updateCheckUser;
        this.readOnly = readOnly;
    }
    async create(user, createDto, lang) {
        utilsFunction_1.default.checkReadOnly(this.readOnly, user);
        return this.service.create(createDto, user);
    }
    async findAll(user, filter, pagination, sort = {}, search = { searchFilter: {} }) {
        const { page, pageSize } = pagination;
        const { searchFilter } = search;
        filter = Object.assign(Object.assign({}, filter), searchFilter);
        return this.service.findAll(filter, page, pageSize, utilsFunction_1.default.getCheckUser(this.findAllCheckUser, user), sort);
    }
    async findOne(user, id) {
        return this.service.findOne(id, true, utilsFunction_1.default.getCheckUser(this.findOneCheckUser, user));
    }
    async findAllWithoutPagination(user, filter, sort = {}, search = { searchFilter: {} }) {
        const { searchFilter } = search;
        filter = Object.assign(Object.assign({}, filter), searchFilter);
        return this.service.findAllWithoutPagination(filter, sort);
    }
    async findOneWithFilter(user, filter, search = { searchFilter: {} }) {
        const { searchFilter } = search;
        filter = Object.assign(Object.assign({}, filter), searchFilter);
        return this.service.findOneWithFilter(filter);
    }
    async update(user, id, updateDto, lang) {
        utilsFunction_1.default.checkReadOnly(this.readOnly, user);
        return await this.service.update(id, updateDto, true, utilsFunction_1.default.getCheckUser(this.updateCheckUser, user));
    }
    async remove(user, id, lang) {
        utilsFunction_1.default.checkReadOnly(this.readOnly, user);
        return this.service.remove(id, true, utilsFunction_1.default.getCheckUser(this.updateCheckUser, user));
    }
}
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object, String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, filter_decorator_1.Filter)()),
    __param(2, (0, pagination_decorator_1.Pagination)()),
    __param(3, (0, sort_decorator_1.Sort)()),
    __param(4, (0, search_decorator_1.Search)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object, pagination_decorator_1.PageOption, Object, search_decorator_1.SearchOption]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('get/all'),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, filter_decorator_1.Filter)()),
    __param(2, (0, sort_decorator_1.Sort)()),
    __param(3, (0, search_decorator_1.Search)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object, Object, search_decorator_1.SearchOption]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findAllWithoutPagination", null);
__decorate([
    (0, common_1.Get)('get/one'),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, filter_decorator_1.Filter)()),
    __param(2, (0, search_decorator_1.Search)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object, search_decorator_1.SearchOption]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findOneWithFilter", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, Object, String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "remove", null);
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map