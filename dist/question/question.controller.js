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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("./question.service");
const create_question_dto_1 = require("./dto/create-question.dto");
const base_controller_1 = require("../utils/base/base.controller");
const filter_1 = require("../core/filter/filter");
const user_decorator_1 = require("../core/decorator/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const questionChoice_service_1 = require("../questionChoice/questionChoice.service");
const base_entity_1 = require("../utils/base/base.entity");
let QuestionController = class QuestionController extends base_controller_1.BaseController {
    constructor(service, questionChoiceService) {
        super(service);
        this.service = service;
        this.questionChoiceService = questionChoiceService;
    }
    async getRequestToAnswer(user, num) {
        return await this.service.getRequestToAnswer(num);
    }
    async createWithChoice(user, body) {
        const { questionChoices } = body;
        const questionChoiceIds = await Promise.all(questionChoices.map(async (questionChoice) => {
            const result = await this.questionChoiceService.create(Object.assign({}, questionChoice));
            return result.id;
        }));
        return await this.service.create(Object.assign(Object.assign({}, body), { questionChoiceIds }));
    }
};
__decorate([
    (0, common_1.Get)("request-to-answer/:num"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Query)("num")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getRequestToAnswer", null);
__decorate([
    (0, common_1.Post)("create-with-choice"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, create_question_dto_1.CreateQuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createWithChoice", null);
QuestionController = __decorate([
    (0, common_1.Controller)('question'),
    __metadata("design:paramtypes", [question_service_1.QuestionService,
        questionChoice_service_1.QuestionChoiceService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map