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
exports.SubmitQuestionRecordController = void 0;
const common_1 = require("@nestjs/common");
const submitQuestionRecord_service_1 = require("./submitQuestionRecord.service");
const create_submitQuestionRecord_dto_1 = require("./dto/create-submitQuestionRecord.dto");
const base_controller_1 = require("../utils/base/base.controller");
const filter_1 = require("../core/filter/filter");
const user_decorator_1 = require("../core/decorator/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const lang_decorator_1 = require("../core/decorator/lang.decorator");
const constant_1 = require("../constant/constant");
const questionChoiceRecord_service_1 = require("../questionChoiceRecord/questionChoiceRecord.service");
const questionChoiceRecord_entity_1 = require("../questionChoiceRecord/entities/questionChoiceRecord.entity");
const user_service_1 = require("../user/user.service");
let SubmitQuestionRecordController = class SubmitQuestionRecordController extends base_controller_1.BaseController {
    constructor(service, questionChoiceRecordService, userService) {
        super(service);
        this.service = service;
        this.questionChoiceRecordService = questionChoiceRecordService;
        this.userService = userService;
        this.findOneCheckUser = true;
        this.findAllCheckUser = true;
    }
    async createWithChoiceRecord(user, createDto, lang) {
        const { questionChoiceRecords } = createDto;
        const createChoiceRecords = await Promise.all(questionChoiceRecords.map(async (questionChoiceRecord) => {
            return await this.questionChoiceRecordService.create(Object.assign({}, questionChoiceRecord), user);
        }));
        const questionChoiceRecordIds = createChoiceRecords.map((questionChoiceRecord) => questionChoiceRecord.id);
        const result = await this.service.create({ questionChoiceRecordIds }, user);
        await this.userService.update(user.id, { lastSubmitQuestionRecordDate: result.createdAt });
        return result;
    }
    async getUserLast(user, userId, lang) {
        const submitQuestionRecord = await this.service.getLastByUserId(userId);
        return submitQuestionRecord;
    }
};
__decorate([
    (0, common_1.Post)("create-with-choice-record"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, create_submitQuestionRecord_dto_1.CreateWithChoiceRecord, String]),
    __metadata("design:returntype", Promise)
], SubmitQuestionRecordController.prototype, "createWithChoiceRecord", null);
__decorate([
    (0, common_1.Get)("get-user-last/:userId"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Param)("userId")),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], SubmitQuestionRecordController.prototype, "getUserLast", null);
SubmitQuestionRecordController = __decorate([
    (0, common_1.Controller)('submit-question-record'),
    __metadata("design:paramtypes", [submitQuestionRecord_service_1.SubmitQuestionRecordService,
        questionChoiceRecord_service_1.QuestionChoiceRecordService,
        user_service_1.UserService])
], SubmitQuestionRecordController);
exports.SubmitQuestionRecordController = SubmitQuestionRecordController;
//# sourceMappingURL=submitQuestionRecord.controller.js.map