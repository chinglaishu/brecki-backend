import { S3_PROFILE_PIC_ONE_PATH, S3_PROFILE_PIC_TWO_BLUR_LESS_PATH, S3_PROFILE_PIC_TWO_BLUR_MORE_PATH, S3_PROFILE_PIC_TWO_CLEAR_PATH } from "src/constant/constant";
import { uploadImage } from "src/core/uploadImage/uploadImage";
import { Friend, PersonalInfo, ProfilePicTwoUrl } from "src/utils/base/base.entity";
import utilsFunction from "src/utils/utilsFunction/utilsFunction";
import { User } from "../entities/user.entity";

const userHelper = {
  checkUserIdInFriendList(friends: Friend[], userId: string) {
    for (let i = 0 ; i < friends.length ; i++) {
      if (utilsFunction.compareId(friends[i].friendId, userId)) {
        return true;
      }
    }
    return false;
  },
  getFilterByPerference(user: User) {
    const {personalInfo} = user;
    const {targetSex, targetLocation, targetAgeRange} = personalInfo;
    let filter: any = {};
    if (targetSex) {filter = {...filter, "personalInfo.sex": targetSex}; }
    if (targetAgeRange) {filter = {...filter, "personalInfo.ageRange": targetAgeRange}; }
    if (targetLocation) {filter = {...filter, "personalInfo.location.placeId": targetLocation.placeId}; }
    return filter; 
  }
};

export default userHelper;
