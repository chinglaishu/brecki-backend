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
exports.ConfigSchema = exports.Config = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../constant/constant");
const base_entity_1 = require("../../utils/base/base.entity");
let Config = class Config extends base_entity_1.BaseEntity {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: { unique: true } }),
    __metadata("design:type", Number)
], Config.prototype, "typeNum", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Config.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Config.prototype, "messageMethodNum", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", base_entity_1.MultiLang)
], Config.prototype, "subject", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", base_entity_1.MultiLang)
], Config.prototype, "content", void 0);
Config = __decorate([
    (0, mongoose_1.Schema)()
], Config);
exports.Config = Config;
;
exports.ConfigSchema = mongoose_1.SchemaFactory.createForClass(Config);
exports.ConfigSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
exports.ConfigSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        return ret;
    }
});
//# sourceMappingURL=config.entity.js.map