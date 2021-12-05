import { S3_PROFILE_PIC_ONE_PATH, S3_PROFILE_PIC_TWO_BLUR_LESS_PATH, S3_PROFILE_PIC_TWO_BLUR_MORE_PATH, S3_PROFILE_PIC_TWO_CLEAR_PATH } from "src/constant/constant";
import { uploadImage } from "src/core/uploadImage/uploadImage";
import { Friend, PersonalInfo, ProfilePicTwoUrl } from "src/utils/base/base.entity";
import utilsFunction from "src/utils/utilsFunction/utilsFunction";

const userHelper = {
  checkUserIdInFriendList(friends: Friend[], userId: string) {
    for (let i = 0 ; i < friends.length ; i++) {
      if (utilsFunction.compareId(friends[i].friendId, userId)) {
        return true;
      }
    }
    return false;
  },
};

export default userHelper;
