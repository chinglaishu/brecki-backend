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
exports.SubmitQuestionRecordService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../utils/base/base.service");
const submitQuestionRecord_entity_1 = require("./entities/submitQuestionRecord.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const filter_1 = require("../core/filter/filter");
const user_entity_1 = require("../user/entities/user.entity");
const question_entity_1 = require("../question/entities/question.entity");
const question_service_1 = require("../question/question.service");
const helper_1 = require("../systemMatch/helper/helper");
let SubmitQuestionRecordService = class SubmitQuestionRecordService extends base_service_1.BaseService {
    constructor(model, questionService) {
        super(model);
        this.model = model;
        this.questionService = questionService;
        this.createAddUserId = true;
        this.populates = ["questionChoiceRecords"];
    }
    async findOne(id, throwErrorIfNotFound = false, checkBelongToUser = null) {
        const filter = this.getFilterByIfCheckBelongToUser(id, checkBelongToUser);
        const result = await this.model.findOne(filter);
        if (!result && throwErrorIfNotFound) {
            throw new common_1.HttpException("item not found or do not belong to user", 500);
        }
        return await this.populateExec(result);
    }
    async getLastByUserId(userId) {
        const results = await this.model.find({ userId }).sort({ createdAt: -1 }).limit(1);
        if (results.length === 0) {
            return null;
        }
        return await results[0];
    }
    async populateExecList(results) {
        const field = helper_1.default.getMatchUserPersonalInfoField();
        for (let i = 0; i < results.length; i++) {
            results[i] = await results[i].populate("user", field).execPopulate();
        }
        return results;
    }
    async populateExec(result) {
        if (!result) {
            return null;
        }
        const field = helper_1.default.getMatchUserPersonalInfoField();
        for (let i = 0; i < this.populates.length; i++) {
            result = await result.populate("questionChoiceRecords").execPopulate();
            await this.getQuestionDetail(result);
        }
        result = await result.populate("user", field).execPopulate();
        return result;
    }
    async getQuestionDetail(submitQuestionRecord) {
        const { questionChoiceRecords } = submitQuestionRecord;
        for (let i = 0; i < questionChoiceRecords.length; i++) {
            const question = await this.questionService.findOne(questionChoiceRecords[i].questionId);
            questionChoiceRecords[i].question = question;
        }
    }
};
SubmitQuestionRecordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(submitQuestionRecord_entity_1.SubmitQuestionRecord.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        question_service_1.QuestionService])
], SubmitQuestionRecordService);
exports.SubmitQuestionRecordService = SubmitQuestionRecordService;
//# sourceMappingURL=submitQuestionRecord.service.js.map