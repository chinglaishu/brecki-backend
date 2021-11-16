"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_entity_1 = require("../../utils/base/base.entity");
const utilsFunction_1 = require("../../utils/utilsFunction/utilsFunction");
const userHelper = {
    checkUserIdInFriendList(friends, userId) {
        for (let i = 0; i < friends.length; i++) {
            if (utilsFunction_1.default.compareId(friends[i].friendId, userId)) {
                return true;
            }
        }
        return false;
    },
};
exports.default = userHelper;
//# sourceMappingURL=helper.js.map