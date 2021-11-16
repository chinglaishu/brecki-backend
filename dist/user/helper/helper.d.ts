import { Friend } from "src/utils/base/base.entity";
declare const userHelper: {
    checkUserIdInFriendList(friends: Friend[], userId: string): boolean;
};
export default userHelper;
