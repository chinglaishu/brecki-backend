import { Friend } from "src/utils/base/base.entity";
import { User } from "../entities/user.entity";
declare const userHelper: {
    checkUserIdInFriendList(friends: Friend[], userId: string): boolean;
    getFilterByPerference(user: User): any;
};
export default userHelper;
