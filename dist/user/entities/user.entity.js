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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../constant/constant");
const base_entity_1 = require("../../utils/base/base.entity");
let User = class User extends base_entity_1.BaseEntity {
};
__decorate([
    (0, mongoose_1.Prop)({ index: { unique: true, sparse: true } }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: { unique: true, sparse: true } }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: constant_1.ROLE_NUM.USER }),
    __metadata("design:type", Number)
], User.prototype, "roleNum", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: { unique: true, sparse: true } }),
    __metadata("design:type", String)
], User.prototype, "displayName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", base_entity_1.PersonalInfo)
], User.prototype, "personalInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], User.prototype, "friends", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", base_entity_1.PersonalityScore)
], User.prototype, "personalityScore", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "personalityScoreNum", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: constant_1.DEFAULT_LANGUAGE }),
    __metadata("design:type", String)
], User.prototype, "language", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: constant_1.ACCOUNT_TYPE_NUM.NORMAL }),
    __metadata("design:type", Number)
], User.prototype, "accountTypeNum", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: { unique: true, sparse: true } }),
    __metadata("design:type", String)
], User.prototype, "socialId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: { unique: true, sparse: true } }),
    __metadata("design:type", String)
], User.prototype, "firebaseEmail", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "firebasePassword", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], User.prototype, "notificationTokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Date)
], User.prototype, "lastSubmitQuestionRecordDate", void 0);
User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
exports.UserSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret["password"];
        delete ret._id;
        return ret;
    }
});
//# sourceMappingURL=user.entity.js.map