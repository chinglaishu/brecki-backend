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
exports.SubmitQuestionScoreRecordSchema = exports.SubmitQuestionScoreRecord = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const questionScoreRecord_entity_1 = require("../../questionScoreRecord/entities/questionScoreRecord.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const base_entity_1 = require("../../utils/base/base.entity");
let SubmitQuestionScoreRecord = class SubmitQuestionScoreRecord extends base_entity_1.BaseEntity {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SubmitQuestionScoreRecord.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SubmitQuestionScoreRecord.prototype, "toUserId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SubmitQuestionScoreRecord.prototype, "submitQuestionRecordId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], SubmitQuestionScoreRecord.prototype, "questionScoreRecordIds", void 0);
SubmitQuestionScoreRecord = __decorate([
    (0, mongoose_1.Schema)()
], SubmitQuestionScoreRecord);
exports.SubmitQuestionScoreRecord = SubmitQuestionScoreRecord;
;
exports.SubmitQuestionScoreRecordSchema = mongoose_1.SchemaFactory.createForClass(SubmitQuestionScoreRecord);
exports.SubmitQuestionScoreRecordSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
exports.SubmitQuestionScoreRecordSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        return ret;
    }
});
exports.SubmitQuestionScoreRecordSchema.virtual("questionScoreRecords", {
    ref: "QuestionScoreRecord",
    localField: "questionScoreRecordIds",
    foreignField: "_id",
});
exports.SubmitQuestionScoreRecordSchema.virtual("user", {
    ref: "User",
    localField: "userId",
    foreignField: "_id",
    justOne: true,
});
//# sourceMappingURL=submitQuestionScoreRecord.entity.js.map