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
exports.MatchSchema = exports.Match = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../constant/constant");
const submitQuestionScoreRecord_entity_1 = require("../../submitQuestionScoreRecord/entities/submitQuestionScoreRecord.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const base_entity_1 = require("../../utils/base/base.entity");
let Match = class Match extends base_entity_1.BaseEntity {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Match.prototype, "userIds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], Match.prototype, "blockedIds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], Match.prototype, "quitedIds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], Match.prototype, "chatDataRecords", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Match.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: constant_1.MATCH_STATUS_NUM.NORMAL }),
    __metadata("design:type", Number)
], Match.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Match.prototype, "intimacy", void 0);
Match = __decorate([
    (0, mongoose_1.Schema)()
], Match);
exports.Match = Match;
exports.MatchSchema = mongoose_1.SchemaFactory.createForClass(Match);
exports.MatchSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
exports.MatchSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        return ret;
    }
});
exports.MatchSchema.virtual("users", {
    ref: "User",
    localField: "userIds",
    foreignField: "_id",
});
//# sourceMappingURL=match.entity.js.map