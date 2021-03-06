"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitQuestionRecordModule = void 0;
const common_1 = require("@nestjs/common");
const submitQuestionRecord_service_1 = require("./submitQuestionRecord.service");
const submitQuestionRecord_controller_1 = require("./submitQuestionRecord.controller");
const mongoose_1 = require("@nestjs/mongoose");
const submitQuestionRecord_entity_1 = require("./entities/submitQuestionRecord.entity");
const questionChoiceRecord_module_1 = require("../questionChoiceRecord/questionChoiceRecord.module");
const user_module_1 = require("../user/user.module");
const question_entity_1 = require("../question/entities/question.entity");
const question_service_1 = require("../question/question.service");
const question_module_1 = require("../question/question.module");
const submitQuestionScoreRecord_entity_1 = require("../submitQuestionScoreRecord/entities/submitQuestionScoreRecord.entity");
const submitQuestionScoreRecord_module_1 = require("../submitQuestionScoreRecord/submitQuestionScoreRecord.module");
let SubmitQuestionRecordModule = class SubmitQuestionRecordModule {
};
SubmitQuestionRecordModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: submitQuestionRecord_entity_1.SubmitQuestionRecord.name, schema: submitQuestionRecord_entity_1.SubmitQuestionRecordSchema },
            ]),
            questionChoiceRecord_module_1.QuestionChoiceRecordModule,
            user_module_1.UserModule,
            question_module_1.QuestionModule,
            submitQuestionScoreRecord_module_1.SubmitQuestionScoreRecordModule,
        ],
        controllers: [submitQuestionRecord_controller_1.SubmitQuestionRecordController],
        providers: [submitQuestionRecord_service_1.SubmitQuestionRecordService],
        exports: [submitQuestionRecord_service_1.SubmitQuestionRecordService],
    })
], SubmitQuestionRecordModule);
exports.SubmitQuestionRecordModule = SubmitQuestionRecordModule;
//# sourceMappingURL=submitQuestionRecord.module.js.map