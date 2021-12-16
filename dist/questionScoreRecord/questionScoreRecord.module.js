"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionScoreRecordModule = void 0;
const common_1 = require("@nestjs/common");
const questionScoreRecord_service_1 = require("./questionScoreRecord.service");
const questionScoreRecord_controller_1 = require("./questionScoreRecord.controller");
const mongoose_1 = require("@nestjs/mongoose");
const questionScoreRecord_entity_1 = require("./entities/questionScoreRecord.entity");
const user_module_1 = require("../user/user.module");
const personality_module_1 = require("../personality/personality.module");
let QuestionScoreRecordModule = class QuestionScoreRecordModule {
};
QuestionScoreRecordModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: questionScoreRecord_entity_1.QuestionScoreRecord.name, schema: questionScoreRecord_entity_1.QuestionScoreRecordSchema },
            ]),
            user_module_1.UserModule,
            personality_module_1.PersonalityModule,
        ],
        controllers: [questionScoreRecord_controller_1.QuestionScoreRecordController],
        providers: [questionScoreRecord_service_1.QuestionScoreRecordService],
        exports: [questionScoreRecord_service_1.QuestionScoreRecordService],
    })
], QuestionScoreRecordModule);
exports.QuestionScoreRecordModule = QuestionScoreRecordModule;
//# sourceMappingURL=questionScoreRecord.module.js.map