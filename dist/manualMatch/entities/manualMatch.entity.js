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
exports.ManualMatchSchema = exports.ManualMatch = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../../user/entities/user.entity");
const base_entity_1 = require("../../utils/base/base.entity");
let ManualMatch = class ManualMatch extends base_entity_1.BaseEntity {
};
__decorate([
    (0, mongoose_1.Prop)({ index: { unique: true }, required: true }),
    __metadata("design:type", String)
], ManualMatch.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], ManualMatch.prototype, "matchUserIds", void 0);
ManualMatch = __decorate([
    (0, mongoose_1.Schema)()
], ManualMatch);
exports.ManualMatch = ManualMatch;
exports.ManualMatchSchema = mongoose_1.SchemaFactory.createForClass(ManualMatch);
exports.ManualMatchSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
exports.ManualMatchSchema.virtual("matchUsers", {
    ref: "User",
    localField: "matchUserIds",
    foreignField: "_id",
});
exports.ManualMatchSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        return ret;
    }
});
//# sourceMappingURL=manualMatch.entity.js.map