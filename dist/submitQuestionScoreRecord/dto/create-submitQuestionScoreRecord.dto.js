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
exports.CreateWithScoreRecordDto = exports.CreateSubmitQuestionScoreRecordDto = void 0;
const class_validator_1 = require("class-validator");
const questionScoreRecord_entity_1 = require("../../questionScoreRecord/entities/questionScoreRecord.entity");
const base_entity_1 = require("../../utils/base/base.entity");
class CreateSubmitQuestionScoreRecordDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubmitQuestionScoreRecordDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubmitQuestionScoreRecordDto.prototype, "toUserId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubmitQuestionScoreRecordDto.prototype, "submitQuestionRecordId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateSubmitQuestionScoreRecordDto.prototype, "questionScoreRecordIds", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", base_entity_1.PersonalityScore)
], CreateSubmitQuestionScoreRecordDto.prototype, "usePersonalityScore", void 0);
exports.CreateSubmitQuestionScoreRecordDto = CreateSubmitQuestionScoreRecordDto;
class CreateWithScoreRecordDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWithScoreRecordDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWithScoreRecordDto.prototype, "toUserId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWithScoreRecordDto.prototype, "submitQuestionRecordId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateWithScoreRecordDto.prototype, "questionScoreRecords", void 0);
exports.CreateWithScoreRecordDto = CreateWithScoreRecordDto;
;
//# sourceMappingURL=create-submitQuestionScoreRecord.dto.js.map