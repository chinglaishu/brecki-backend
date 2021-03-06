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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../utils/base/base.service");
const user_entity_1 = require("./entities/user.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crypt_1 = require("../utils/utilsFunction/crypt");
const filter_1 = require("../core/filter/filter");
const constant_1 = require("../constant/constant");
const helper_1 = require("./helper/helper");
const base_entity_1 = require("../utils/base/base.entity");
const moment = require("moment-timezone");
const exception_model_1 = require("../core/exception/exception.model");
const exceptioncode_enum_1 = require("../core/exception/exceptioncode.enum");
const uuid = require("uuid");
const helper_2 = require("../auth/helper/helper");
const questionScoreRecord_entity_1 = require("../questionScoreRecord/entities/questionScoreRecord.entity");
const personality_entity_1 = require("../personality/entities/personality.entity");
const helper_3 = require("../personality/helper/helper");
const match_entity_1 = require("../match/entities/match.entity");
const systemMatch_entity_1 = require("../systemMatch/entities/systemMatch.entity");
const manualMatch_entity_1 = require("../manualMatch/entities/manualMatch.entity");
const utilsFunction_1 = require("../utils/utilsFunction/utilsFunction");
let UserService = class UserService extends base_service_1.BaseService {
    constructor(model, matchModel, systemMatchModel, manualMatchModel) {
        super(model);
        this.model = model;
        this.matchModel = matchModel;
        this.systemMatchModel = systemMatchModel;
        this.manualMatchModel = manualMatchModel;
    }
    async create(createUserDto) {
        if (createUserDto.password) {
            createUserDto.password = await crypt_1.default.hashPassword(createUserDto.password);
        }
        const id = uuid.v4();
        const firebaseEmail = `${id}@gmail.com`;
        const firebasePassword = (0, helper_2.generateDigitNumber)(8);
        createUserDto = Object.assign(Object.assign({}, createUserDto), { id, firebaseEmail, firebasePassword });
        return await this.model.create(createUserDto);
    }
    async checkIsIdOfUser(user, id) {
        if (user.id !== id && user.roleNum !== constant_1.ROLE_NUM.ADMIN) {
            throw new common_1.HttpException("user do not own this user id", 500);
        }
        return true;
    }
    async addUserToFriendList(user, friendUserId) {
        const { friends } = user;
        if (helper_1.default.checkUserIdInFriendList(friends, friendUserId)) {
            return user;
        }
        const friend = {
            friendId: friendUserId,
            status: constant_1.FRIEND_STATUS_NUM.normal,
            intimacy: 0,
            startFriendDate: moment().toDate(),
        };
        friends.push(friend);
        return await this.update(user.id, { friends }, true);
    }
    async removeUserFromFriendList(user, friendUserId) {
        const { friends } = user;
        if (!helper_1.default.checkUserIdInFriendList(friends, friendUserId)) {
            return user;
        }
    }
    async getRandomWithPerference(user, withPreference, size, isManual) {
        let filter = (withPreference) ? helper_1.default.getFilterByPerference(user) : {};
        const userIds = await this.getUserIdsFromMatch(user, isManual);
        console.log(userIds);
        filter = Object.assign(Object.assign({}, filter), { personalInfo: { $ne: null }, _id: { $nin: userIds } });
        const result = await this.getRandom(size, filter);
        return result;
    }
    async updatePersonalityScore(user, questionScoreRecords) {
        if (questionScoreRecords.length === 0) {
            throw new common_1.HttpException("Question score record length can not be 0", 500);
        }
        const useScore = questionScoreRecords[questionScoreRecords.length - 1].personalityScore;
        const newPersonalityScore = helper_3.default.getNewScore(user, useScore);
        const useNum = user.personalityScoreNum || 0;
        const result = await this.update(user.id, { personalityScore: newPersonalityScore, personalityScoreNum: useNum + 1 });
        return result;
    }
    async getUserIdsFromMatch(user, isManual) {
        const matchs = await this.matchModel.find({ userIds: { $eq: user.id } });
        const manualMatch = await this.manualMatchModel.findOne({ userId: user.id });
        const systemMatch = await this.systemMatchModel.findOne({ userId: user.id });
        const matchUserIds = matchs.map((match) => {
            const { userIds } = match;
            for (let i = 0; i < userIds.length; i++) {
                if (!utilsFunction_1.default.compareId(userIds[i], user.id)) {
                    return userIds[i];
                }
            }
            return null;
        });
        const manualMatchUserIds = (manualMatch === null || manualMatch === void 0 ? void 0 : manualMatch.matchUserIds) || [];
        const systemMatchUserIds = (systemMatch === null || systemMatch === void 0 ? void 0 : systemMatch.matchUserIds) || [];
        const userIds = [...manualMatchUserIds, ...systemMatchUserIds, ...matchUserIds, user.id];
        return [...new Set(userIds)];
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(match_entity_1.Match.name)),
    __param(2, (0, mongoose_1.InjectModel)(systemMatch_entity_1.SystemMatch.name)),
    __param(3, (0, mongoose_1.InjectModel)(manualMatch_entity_1.ManualMatch.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map