"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const moment = require("moment-timezone");
const systemMatchHelper = {
    checkTime(time, requiredMinuteDiff) {
        const validAfter = moment(time).add(requiredMinuteDiff, "minutes");
        const isCurrentValid = moment().isAfter(validAfter);
        if (!isCurrentValid) {
            throw new common_1.HttpException("Not valid time now", 500);
        }
        return true;
    },
    getMatchUserPersonalInfoField() {
        return {
            personalInfo: {
                name: 1,
                ageRange: 1,
                sex: 1,
                location: 1,
                profilePicOneUrl: 1,
                profilePicTwoUrl: {
                    blurMore: 1,
                },
            },
            personalityScore: 1,
        };
    },
};
exports.default = systemMatchHelper;
//# sourceMappingURL=helper.js.map