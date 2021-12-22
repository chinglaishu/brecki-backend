"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questionScoreRecord_entity_1 = require("../../questionScoreRecord/entities/questionScoreRecord.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const base_entity_1 = require("../../utils/base/base.entity");
const personalityHelper = {
    getBasePersonality(personalities) {
        const obj = {};
        for (let i = 0; i < personalities.length; i++) {
            obj[personalities[i].key] = 0;
        }
        return obj;
    },
    getNewScore(user, newPersonalityScore) {
        const { personalityScoreNum, personalityScore } = user;
        const oldPersonalityScore = Object.assign({}, personalityScore);
        const keys = Object.keys(newPersonalityScore);
        for (let i = 0; i < keys.length; i++) {
            oldPersonalityScore[keys[i]] = (oldPersonalityScore[keys[i]] * personalityScoreNum + newPersonalityScore[keys[i]]) / (personalityScoreNum + 1);
        }
        return oldPersonalityScore;
    },
    addUpPersonalityScore(scoreA, scoreB) {
        const keys = Object.keys(scoreA);
        for (let i = 0; i < keys.length; i++) {
            scoreA[keys[i]] += scoreB[keys[i]];
        }
    },
};
exports.default = personalityHelper;
//# sourceMappingURL=helper.js.map