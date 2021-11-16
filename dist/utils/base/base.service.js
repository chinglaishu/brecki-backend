"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../../constant/constant");
const user_entity_1 = require("../../user/entities/user.entity");
const utilsFunction_1 = require("../utilsFunction/utilsFunction");
const base_entity_1 = require("./base.entity");
const filter_1 = require("../../core/filter/filter");
class BaseService {
    constructor(model) {
        this.model = model;
    }
    create(createDto) {
        return this.model.create(createDto);
    }
    async findAll(filter, page, pageSize, checkIfAddUserIdByUser = null, sort = {}) {
        filter = utilsFunction_1.default.checkIfAddUserId(constant_1.USER_ID_FIELD, checkIfAddUserIdByUser, filter);
        let totalCount, data;
        filter = this.createFilterForTime(filter);
        totalCount = await this.model.count(filter);
        data = await this.model.find(filter).sort(sort).skip((page - 1) * pageSize).limit(+pageSize).exec();
        if (Object.keys(sort).length === 0) {
            data.sort((a, b) => a.index - b.index);
        }
        const result = new base_entity_1.PaginationEntity();
        result.data = data;
        result.page = page;
        result.pageSize = pageSize;
        result.totalPage = Math.ceil(totalCount / pageSize);
        return result;
    }
    async findAllWithoutFilter() {
        return await this.model.find();
    }
    async findOne(id, throwErrorIfNotFound = false, checkBelongToUser = null) {
        const filter = this.getFilterByIfCheckBelongToUser(id, checkBelongToUser);
        const result = await this.model.findOne(filter);
        if (!result && throwErrorIfNotFound) {
            throw new common_1.HttpException("item not found or do not belong to user", 500);
        }
        return result;
    }
    async findOneWithFilter(filter, throwErrorIfNotFound = false) {
        const result = await this.model.findOne(filter);
        if (!result && throwErrorIfNotFound) {
            throw new common_1.HttpException("item not found", 500);
        }
        return result;
    }
    async count(filter) {
        const count = await this.model.count(filter);
        return count;
    }
    async countAndError(filter, errMessage = "error, more than one") {
        const count = await this.count(filter);
        if (count > 0) {
            throw new common_1.HttpException(errMessage, 500);
        }
        return count;
    }
    async update(id, updateDto, throwErrorIfNotFound = false, checkBelongToUser = null) {
        const filter = this.getFilterByIfCheckBelongToUser(id, checkBelongToUser);
        const result = await this.model.findOneAndUpdate(filter, updateDto, { new: true });
        if (!result && throwErrorIfNotFound) {
            throw new common_1.HttpException("item not found or do not belong to user", 500);
        }
        return result;
    }
    async remove(id, throwErrorIfNotFound = false, checkBelongToUser = null) {
        const filter = this.getFilterByIfCheckBelongToUser(id, checkBelongToUser);
        const result = await this.model.findOneAndDelete(filter);
        if (!result && throwErrorIfNotFound) {
            throw new common_1.HttpException("item not found or do not belong to user", 500);
        }
        return result;
    }
    createFilterForTime(filter) {
        const { from, to } = filter;
        if (from && to) {
            const startTimeFilter = {
                $gte: from,
                $lt: to,
            };
            delete filter["from"];
            delete filter["to"];
            filter["startTime"] = startTimeFilter;
        }
        return filter;
    }
    getFilterByIfCheckBelongToUser(id, checkBelongToUser) {
        const filter = { _id: id };
        if (checkBelongToUser) {
            if (checkBelongToUser.roleNum === constant_1.ROLE_NUM.ADMIN) {
                return filter;
            }
            filter[constant_1.USER_ID_FIELD] = checkBelongToUser.id;
        }
        return filter;
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map