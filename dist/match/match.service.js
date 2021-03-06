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
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../utils/base/base.service");
const match_entity_1 = require("./entities/match.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const filter_1 = require("../core/filter/filter");
const constant_1 = require("../constant/constant");
const notification_1 = require("../core/notification/notification");
const notificationMessage_1 = require("../constant/notificationMessage");
const user_service_1 = require("../user/user.service");
const helper_1 = require("../systemMatch/helper/helper");
const user_entity_1 = require("../user/entities/user.entity");
const helper_2 = require("./helper/helper");
let MatchService = class MatchService extends base_service_1.BaseService {
    constructor(model) {
        super(model);
        this.model = model;
        this.populates = ["users"];
    }
    async addChatDataRecord(user, match, body) {
        const { chatDataRecords } = match;
        const useChatDataRecords = JSON.parse(JSON.stringify(chatDataRecords));
        const chatDataRecord = helper_2.default.getUseChatData(useChatDataRecords, user);
        helper_2.default.addChatDataToRecord(chatDataRecord, body);
        const intimacy = helper_2.default.calculateIntimacy(useChatDataRecords);
        return await this.update(match.id, { chatDataRecords: useChatDataRecords, intimacy });
    }
    async populateExecList(results) {
        if (!results) {
            return results;
        }
        for (let i = 0; i < results.length; i++) {
            const { intimacy } = results[i];
            const field = helper_1.default.getMatchUserPersonalInfoFieldByIntimacy(intimacy);
            results[i] = await results[i].populate("users", field).execPopulate();
        }
        return results;
    }
    async populateExec(result) {
        if (!result) {
            return result;
        }
        const { intimacy } = result;
        const field = helper_1.default.getMatchUserPersonalInfoFieldByIntimacy(intimacy);
        result = await result.populate("users", field).execPopulate();
        return result;
    }
};
MatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(match_entity_1.Match.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MatchService);
exports.MatchService = MatchService;
//# sourceMappingURL=match.service.js.map