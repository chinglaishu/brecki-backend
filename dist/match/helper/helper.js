"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const constant_1 = require("../../constant/constant");
const user_entity_1 = require("../../user/entities/user.entity");
const base_entity_1 = require("../../utils/base/base.entity");
const matchHelper = {
    addChatDataToRecord(chatDataRecord, body) {
        const { type, length } = body;
        const useLength = length || 0;
        chatDataRecord.totalMessageNum += 1;
        if (type === "image") {
            chatDataRecord.imageNum += 1;
        }
        else if (type === "paint") {
            chatDataRecord.paintNum += 1;
        }
        else if (type === "text") {
            chatDataRecord.textNum += 1;
            chatDataRecord.totalMessageNum += useLength;
        }
        else if (type === "voice") {
            chatDataRecord.voiceNum += 1;
            chatDataRecord.voiceLength += useLength;
        }
        return chatDataRecord;
    },
    getUseChatData(chatDataRecords, user) {
        for (let i = 0; i < chatDataRecords.length; i++) {
            if (chatDataRecords[i].userId === user.id) {
                return chatDataRecords[i];
            }
        }
        const defaultChatDataRecord = {
            userId: user.id,
            textNum: 0,
            textCharacter: 0,
            totalMessageNum: 0,
            imageNum: 0,
            paintNum: 0,
            voiceNum: 0,
            voiceLength: 0,
        };
        return defaultChatDataRecord;
    },
    calculateIntimacy(chatDataRecords) {
        if (chatDataRecords.length !== 2) {
            throw new common_1.HttpException("error, chat data records length should be 2", 500);
        }
        const a = matchHelper.calculateOneIntimacy(chatDataRecords[0]);
        const b = matchHelper.calculateOneIntimacy(chatDataRecords[1]);
        const sum = a + b;
        const diff = Math.abs(a - b);
        const percentage = (sum - diff) / sum;
        const value = sum * percentage;
        return value;
    },
    calculateOneIntimacy(chatDataRecord) {
        const { textCharacter, voiceLength, paintNum, imageNum } = chatDataRecord;
        const value = (textCharacter * constant_1.TEXT_WEIGHT + voiceLength * constant_1.VOICE_WEIGHT + imageNum * constant_1.IMAGE_WEIGHT + paintNum * constant_1.PAINT_WEIGHT);
        return value;
    },
    getMatchStatistic(matchs, currentUserId) {
        const statisticData = {};
        for (let i = 0; i < matchs.length; i++) {
            const useUser = matchHelper.getUseUser(matchs[i], currentUserId);
            if (!useUser) {
                continue;
            }
            matchHelper.addStatisticData(statisticData, useUser.personalityScore, matchs[i].intimacy);
        }
        return statisticData;
    },
    getUseUser(match, currentUserId) {
        for (let i = 0; i < match.users.length; i++) {
            if (match.users[i].id !== currentUserId) {
                return match.users[i];
            }
        }
        return null;
    },
    addStatisticData(statisticData, personalityScore, intimacy) {
        if (!personalityScore) {
            return;
        }
        const keyList = Object.keys(personalityScore);
        let ratio = intimacy / constant_1.MAX_INTIMACY_LEVEL;
        if (ratio > 1) {
            ratio = 1;
        }
        if (ratio < 0) {
            ratio = 0;
        }
        for (let i = 0; i < keyList.length; i++) {
            let scoreArea = Math.round(personalityScore[keyList[i]]);
            if (scoreArea < 0) {
                scoreArea = 0;
            }
            if (scoreArea > 10) {
                scoreArea = 10;
            }
            if (!statisticData[keyList[i]]) {
                statisticData[keyList[i]] = {};
            }
            const currentScore = statisticData[keyList[i]][scoreArea] || 0;
            statisticData[keyList[i]][scoreArea] = currentScore + (personalityScore[keyList[i]] * ratio);
        }
    },
    addMatchScore(personalityScore, score, intimacy) {
        const keyList = Object.keys(personalityScore);
        let ratio = intimacy / constant_1.MAX_INTIMACY_LEVEL;
        if (ratio > 1) {
            ratio = 1;
        }
        if (ratio < 0) {
            ratio = 0;
        }
        for (let i = 0; i < keyList.length; i++) {
            const currentScore = score[keyList[i]] || 0;
            score[keyList[i]] = currentScore + (personalityScore[keyList[i]] * ratio);
        }
    },
    getLargestInStatisticData(statisticData) {
        let max = 0;
        const keyList = Object.keys(statisticData);
        for (let i = 0; i < keyList.length; i++) {
            const useKeyList = Object.keys(statisticData[keyList[i]]);
            for (let a = 0; a < useKeyList.length; a++) {
                const num = statisticData[keyList[i]][useKeyList[a]];
                if (num > max) {
                    max = num;
                }
            }
        }
        return max;
    },
};
exports.default = matchHelper;
//# sourceMappingURL=helper.js.map