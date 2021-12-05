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
exports.PaginationEntity = exports.PersonalityScoreRecord = exports.QuestionChoice = exports.Friend = exports.Target = exports.PersonalInfo = exports.EmailOrSMSData = exports.MultiLang = exports.BaseEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let BaseEntity = class BaseEntity {
};
__decorate([
    (0, mongoose_1.Prop)({ default: () => new Date() }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => new Date() }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "updatedAt", void 0);
BaseEntity = __decorate([
    (0, mongoose_1.Schema)({
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], BaseEntity);
exports.BaseEntity = BaseEntity;
class MultiLang {
}
exports.MultiLang = MultiLang;
;
class EmailOrSMSData {
}
exports.EmailOrSMSData = EmailOrSMSData;
;
class PersonalInfo {
}
exports.PersonalInfo = PersonalInfo;
class Target {
}
exports.Target = Target;
;
class Friend {
}
exports.Friend = Friend;
let QuestionChoice = class QuestionChoice {
};
QuestionChoice = __decorate([
    (0, mongoose_1.Schema)({
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], QuestionChoice);
exports.QuestionChoice = QuestionChoice;
;
class PersonalityScoreRecord {
}
exports.PersonalityScoreRecord = PersonalityScoreRecord;
;
class PaginationEntity {
    constructor(totalPage, data, page, pageSize) {
        this.totalPage = totalPage;
        this.data = data;
        this.page = page;
        ;
        this.pageSize = pageSize;
    }
}
exports.PaginationEntity = PaginationEntity;
//# sourceMappingURL=base.entity.js.map