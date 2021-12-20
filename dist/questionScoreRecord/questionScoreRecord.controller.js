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
exports.QuestionScoreRecordController = void 0;
const common_1 = require("@nestjs/common");
const questionScoreRecord_service_1 = require("./questionScoreRecord.service");
const create_questionScoreRecord_dto_1 = require("./dto/create-questionScoreRecord.dto");
const base_controller_1 = require("../utils/base/base.controller");
const filter_1 = require("../core/filter/filter");
const user_decorator_1 = require("../core/decorator/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const lang_decorator_1 = require("../core/decorator/lang.decorator");
const constant_1 = require("../constant/constant");
const utilsFunction_1 = require("../utils/utilsFunction/utilsFunction");
const user_service_1 = require("../user/user.service");
const personality_service_1 = require("../personality/personality.service");
let QuestionScoreRecordController = class QuestionScoreRecordController extends base_controller_1.BaseController {
    constructor(service, userService, personalityService) {
        super(service);
        this.service = service;
        this.userService = userService;
        this.personalityService = personalityService;
        this.findOneCheckUser = true;
        this.findAllCheckUser = true;
    }
    async create(user, createDto, lang) {
        utilsFunction_1.default.checkReadOnly(this.readOnly, user);
        const createResult = await this.service.create(createDto, user);
        const questionScoreRecords = await this.service.findAllWithoutPagination({ toUserId: createDto.toUserId });
        const personalities = await this.personalityService.findAllWithoutFilter();
        const toUser = await this.userService.findOne(createDto.toUserId);
        await this.userService.updatePersonalityScore(toUser, questionScoreRecords, personalities);
        return createResult;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.ReqUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, lang_decorator_1.Lang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, create_questionScoreRecord_dto_1.CreateQuestionScoreRecordDto, String]),
    __metadata("design:returntype", Promise)
], QuestionScoreRecordController.prototype, "create", null);
QuestionScoreRecordController = __decorate([
    (0, common_1.Controller)('question-score-record'),
    __metadata("design:paramtypes", [questionScoreRecord_service_1.QuestionScoreRecordService,
        user_service_1.UserService,
        personality_service_1.PersonalityService])
], QuestionScoreRecordController);
exports.QuestionScoreRecordController = QuestionScoreRecordController;
//# sourceMappingURL=questionScoreRecord.controller.js.map