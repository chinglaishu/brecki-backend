import { HttpException } from "@nestjs/common";
import * as moment from "moment-timezone";

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
        location: 1,
        profilePicOneUrl: 1,
        profilePicTwoUrl: {
          blurMore: 1,
        },
      }
    };
  },
};

export default systemMatchHelper;
