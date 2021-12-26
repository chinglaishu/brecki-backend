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
exports.SubmitQuestionRecordSchema = exports.SubmitQuestionRecord = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const questionChoiceRecord_entity_1 = require("../../questionChoiceRecord/entities/questionChoiceRecord.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const base_entity_1 = require("../../utils/base/base.entity");
let SubmitQuestionRecord = class SubmitQuestionRecord extends base_entity_1.BaseEntity {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SubmitQuestionRecord.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], SubmitQuestionRecord.prototype, "questionChoiceRecordIds", void 0);
SubmitQuestionRecord = __decorate([
    (0, mongoose_1.Schema)()
], SubmitQuestionRecord);
exports.SubmitQuestionRecord = SubmitQuestionRecord;
exports.SubmitQuestionRecordSchema = mongoose_1.SchemaFactory.createForClass(SubmitQuestionRecord);
exports.SubmitQuestionRecordSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
exports.SubmitQuestionRecordSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        return ret;
    }
});
exports.SubmitQuestionRecordSchema.virtual("questionChoiceRecords", {
    ref: "QuestionChoiceRecord",
    localField: "questionChoiceRecordIds",
    foreignField: "_id",
});
exports.SubmitQuestionRecordSchema.virtual("user", {
    ref: "QuestionChoiceRecord",
    localField: "questionChoiceRecordIds",
    foreignField: "_id",
    justOne: true,
});
//# sourceMappingURL=submitQuestionRecord.entity.js.map