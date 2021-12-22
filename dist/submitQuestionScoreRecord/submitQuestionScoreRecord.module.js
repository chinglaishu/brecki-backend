"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitQuestionScoreRecordModule = void 0;
const common_1 = require("@nestjs/common");
const submitQuestionScoreRecord_service_1 = require("./submitQuestionScoreRecord.service");
const submitQuestionScoreRecord_controller_1 = require("./submitQuestionScoreRecord.controller");
const mongoose_1 = require("@nestjs/mongoose");
const submitQuestionScoreRecord_entity_1 = require("./entities/submitQuestionScoreRecord.entity");
const questionScoreRecord_module_1 = require("../questionScoreRecord/questionScoreRecord.module");
const personality_module_1 = require("../personality/personality.module");
const user_module_1 = require("../user/user.module");
let SubmitQuestionScoreRecordModule = class SubmitQuestionScoreRecordModule {
};
SubmitQuestionScoreRecordModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: submitQuestionScoreRecord_entity_1.SubmitQuestionScoreRecord.name, schema: submitQuestionScoreRecord_entity_1.SubmitQuestionScoreRecordSchema },
            ]),
            questionScoreRecord_module_1.QuestionScoreRecordModule,
            personality_module_1.PersonalityModule,
            user_module_1.UserModule,
        ],
        controllers: [submitQuestionScoreRecord_controller_1.SubmitQuestionScoreRecordController],
        providers: [submitQuestionScoreRecord_service_1.SubmitQuestionScoreRecordService],
        exports: [submitQuestionScoreRecord_service_1.SubmitQuestionScoreRecordService],
    })
], SubmitQuestionScoreRecordModule);
exports.SubmitQuestionScoreRecordModule = SubmitQuestionScoreRecordModule;
//# sourceMappingURL=submitQuestionScoreRecord.module.js.map