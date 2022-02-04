"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const moment = require("moment-timezone");
const constant_1 = require("../../constant/constant");
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
    getProfilePicTwoUrl(intimacy) {
        if (intimacy >= constant_1.MAX_INTIMACY_LEVEL) {
            return { clear: 1 };
        }
        else if (intimacy >= (constant_1.MAX_INTIMACY_LEVEL / 2)) {
            return { blurLess: 1 };
        }
        return { blurMore: 1 };
    },
    getMatchUserPersonalInfoFieldByIntimacy(intimacy) {
        const profilePicTwoUrl = systemMatchHelper.getProfilePicTwoUrl(intimacy);
        return {
            personalInfo: {
                name: 1,
                ageRange: 1,
                sex: 1,
                location: 1,
                profilePicOneUrl: 1,
                profilePicTwoUrl,
            },
            personalityScore: 1,
        };
    },
};
exports.default = systemMatchHelper;
//# sourceMappingURL=helper.js.map