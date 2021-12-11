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
exports.QuestionSchema = exports.Question = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const personality_entity_1 = require("../../personality/entities/personality.entity");
const base_entity_1 = require("../../utils/base/base.entity");
let Question = class Question extends base_entity_1.BaseEntity {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", base_entity_1.MultiLang)
], Question.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Question.prototype, "questionChoiceIds", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Question.prototype, "defaultPersonalityKeys", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Question.prototype, "imageUrl", void 0);
Question = __decorate([
    (0, mongoose_1.Schema)()
], Question);
exports.Question = Question;
;
exports.QuestionSchema = mongoose_1.SchemaFactory.createForClass(Question);
exports.QuestionSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
exports.QuestionSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        return ret;
    }
});
exports.QuestionSchema.virtual("questionChoices", {
    ref: "QuestionChoice",
    localField: "questionChoiceIds",
    foreignField: "_id",
});
exports.QuestionSchema.virtual("defaultPersonalitys", {
    ref: "Personality",
    localField: "defaultPersonalityKeys",
    foreignField: "key",
});
//# sourceMappingURL=question.entity.js.map