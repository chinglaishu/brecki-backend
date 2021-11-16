"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdConfirmConstraint = exports.AdminFieldConfirmConstraint = exports.checkAdminConstraint = void 0;
const class_validator_1 = require("class-validator");
const constant_1 = require("../../constant/constant");
const constant_2 = require("../../constant/constant");
const checkAdminConstraint = (args) => {
    const { object, constraints } = args;
    if (!constraints) {
        return true;
    }
    const isCheckAdmin = constraints.includes(constant_1.DTO_CHECK_ADMIN_FIELD_KEY);
    if (!isCheckAdmin) {
        return true;
    }
    const typeNum = object[constant_1.DTO_TYPE_NUM_KEY];
    return typeNum === constant_2.ROLE_NUM.ADMIN;
};
exports.checkAdminConstraint = checkAdminConstraint;
let AdminFieldConfirmConstraint = class AdminFieldConfirmConstraint {
    validate(value, args) {
        return (0, exports.checkAdminConstraint)(args);
    }
    defaultMessage() {
        return "only admin field";
    }
};
AdminFieldConfirmConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: "adminOnlyField", async: false })
], AdminFieldConfirmConstraint);
exports.AdminFieldConfirmConstraint = AdminFieldConfirmConstraint;
let UserIdConfirmConstraint = class UserIdConfirmConstraint {
    validate(value, args) {
        if (!(0, exports.checkAdminConstraint)(args)) {
            delete args.object.userId;
        }
        return true;
    }
};
UserIdConfirmConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: "userIdField", async: false })
], UserIdConfirmConstraint);
exports.UserIdConfirmConstraint = UserIdConfirmConstraint;
//# sourceMappingURL=common.validator.js.map