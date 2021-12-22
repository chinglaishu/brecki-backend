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
exports.SubmitQuestionScoreRecordController = void 0;
const common_1 = require("@nestjs/common");
const submitQuestionScoreRecord_service_1 = require("./submitQuestionScoreRecord.service");
const create_submitQuestionScoreRecord_dto_1 = require("./dto/create-submitQuestionScoreRecord.dto");
const base_controller_1 = require("../utils/base/base.controller");
const filter_1 = require("../core/filter/filter");
const user_decorator_1 = require("../core/decorator/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const lang_decorator_1 = require("../core/decorator/lang.decorator");
const constant_1 = require("../constant/constant");
const questionScoreRecord_service_1 = require("../questionScoreRecord/questionScoreRecord.service");
const personality_service_1 = require("../personality/personality.service");
const user_service_1 = require("../user/user.service");
let SubmitQuestionScoreRecordController = class SubmitQuestionScoreRecordController extends base_controller_1.BaseController {
    constructor(service, questionScoreRecordService, personalityService, userService) {
        super(service);
        this.service = service;
        this.questionScoreRecordService = questionScoreRecordService;
        this.personalityService = personalityService;
        this.userService = userService;
        this.findOneCheckUser = true;
        this.findAllCheckUser = true;
        this.updateCheckUser = true;
    }
    async createWithScoreRecord(user, createDto, lang) {
        const { questionScoreRecords, toUserId, submitQuestionRecordId } = createDto;
        if (questionScoreRecords.length === 0) {
            throw new common_1.HttpException("Question Score Record can not be empty", 500);
        }
        const toUser = await this.userService.findOne(toUserId, true);
        const questionScoreRecordIds = await Promise.all(questionScoreRecords.map(async (questionChoiceRecord) => {
            return await this.questionScoreRecordService.create(Object.assign({}, questionChoiceRecord), user);
        }));
        const result = await this.service.create({ questionScoreRecordIds, toUserId, submitQuestionRecordId }, user);
        await this.userService.updatePersonalityScore(toUser, questionScoreRecords);
        return result;
    }
};
__decorate([
    (0, common_1.Post)("create-with-score-record"),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, create_submitQuestionScoreRecord_dto_1.CreateWithScoreRecordDto, String]),
    __metadata("design:returntype", Promise)
], SubmitQuestionScoreRecordController.prototype, "createWithScoreRecord", null);
SubmitQuestionScoreRecordController = __decorate([
    (0, common_1.Controller)('submit-question-score-record'),
    __metadata("design:paramtypes", [submitQuestionScoreRecord_service_1.SubmitQuestionScoreRecordService,
        questionScoreRecord_service_1.QuestionScoreRecordService,
        personality_service_1.PersonalityService,
        user_service_1.UserService])
], SubmitQuestionScoreRecordController);
exports.SubmitQuestionScoreRecordController = SubmitQuestionScoreRecordController;
//# sourceMappingURL=submitQuestionScoreRecord.controller.js.map