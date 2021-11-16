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
exports.UpdateConfigDto = void 0;
const class_validator_1 = require("class-validator");
const constant_1 = require("../../constant/constant");
const base_entity_1 = require("../../utils/base/base.entity");
class UpdateConfigDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateConfigDto.prototype, "typeNum", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateConfigDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateConfigDto.prototype, "messageMethodNum", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", base_entity_1.MultiLang)
], UpdateConfigDto.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", base_entity_1.MultiLang)
], UpdateConfigDto.prototype, "content", void 0);
exports.UpdateConfigDto = UpdateConfigDto;
//# sourceMappingURL=update-config.dto.js.map