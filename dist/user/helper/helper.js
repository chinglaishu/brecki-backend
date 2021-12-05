"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("../../constant/constant");
const uploadImage_1 = require("../../core/uploadImage/uploadImage");
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
    getFilterByPerference(user) {
        const { personalInfo } = user;
        const { targetSex, targetLocation, targetAgeRange } = personalInfo;
        let filter = {};
        if (targetSex) {
            filter = Object.assign(Object.assign({}, filter), { "personalInfo.sex": targetSex });
        }
        if (targetAgeRange) {
            filter = Object.assign(Object.assign({}, filter), { "personalInfo.ageRange": targetAgeRange });
        }
        if (targetLocation) {
            filter = Object.assign(Object.assign({}, filter), { "personalInfo.location.placeId": targetLocation.placeId });
        }
        return filter;
    }
};
exports.default = userHelper;
//# sourceMappingURL=helper.js.map