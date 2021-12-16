"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questionScoreRecord_entity_1 = require("../../questionScoreRecord/entities/questionScoreRecord.entity");
const base_entity_1 = require("../../utils/base/base.entity");
const personalityHelper = {
    getBasePersonality(personalities) {
        const obj = {};
        for (let i = 0; i < personalities.length; i++) {
            obj[personalities[i].key] = 0;
        }
        return obj;
    },
    getAverageScore(personalityScore, questionScoreRecords) {
        for (let i = 0; i < questionScoreRecords.length; i++) {
            this.addUpPersonalityScore(personalityScore, questionScoreRecords[i].personalityScore);
        }
        const keys = Object.keys(personalityScore);
        for (let i = 0; i < keys.length; i++) {
            personalityScore[keys[i]] = personalityScore[keys[i]] / questionScoreRecords.length;
        }
        return personalityScore;
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