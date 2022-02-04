import { HttpException } from "@nestjs/common";
import * as moment from "moment-timezone";
import { MAX_INTIMACY_LEVEL } from "src/constant/constant";

const systemMatchHelper = {
  checkTime(time: Date, requiredMinuteDiff: number) {
    const validAfter = moment(time).add(requiredMinuteDiff, "minutes");
    const isCurrentValid = moment().isAfter(validAfter);
    if (!isCurrentValid) {
      throw new HttpException("Not valid time now", 500);
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
  getProfilePicTwoUrl(intimacy: number) {
    if (intimacy >= MAX_INTIMACY_LEVEL) {
      return {clear: 1};
    } else if (intimacy >= (MAX_INTIMACY_LEVEL/2)) {
      return {blurLess: 1};
    }
    return {blurMore: 1};
  },
  getMatchUserPersonalInfoFieldByIntimacy(intimacy: number) {

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

export default systemMatchHelper;
