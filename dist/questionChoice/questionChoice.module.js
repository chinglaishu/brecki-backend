"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionChoiceModule = void 0;
const common_1 = require("@nestjs/common");
const questionChoice_service_1 = require("./questionChoice.service");
const questionChoice_controller_1 = require("./questionChoice.controller");
const mongoose_1 = require("@nestjs/mongoose");
const questionChoice_entity_1 = require("./entities/questionChoice.entity");
let QuestionChoiceModule = class QuestionChoiceModule {
};
QuestionChoiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: questionChoice_entity_1.QuestionChoice.name, schema: questionChoice_entity_1.QuestionChoiceSchema },
            ]),
        ],
        controllers: [questionChoice_controller_1.QuestionChoiceController],
        providers: [questionChoice_service_1.QuestionChoiceService],
        exports: [questionChoice_service_1.QuestionChoiceService],
    })
], QuestionChoiceModule);
exports.QuestionChoiceModule = QuestionChoiceModule;
//# sourceMappingURL=questionChoice.module.js.map