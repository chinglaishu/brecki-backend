"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPushNotification = exports.sendPushNotificationByUserId = void 0;
const notificationMessage_1 = require("../../constant/notificationMessage");
const user_entity_1 = require("../../user/entities/user.entity");
const user_service_1 = require("../../user/user.service");
const sendPushNotificationByUserId = async (userId, userService, nmKey, data) => {
    var _a, _b, _c, _d;
    const user = await userService.findOne(userId);
    const { notificationTokens, language } = user;
    const title = (_b = (_a = notificationMessage_1.NM === null || notificationMessage_1.NM === void 0 ? void 0 : notificationMessage_1.NM[nmKey]) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b[language];
    const body = (_d = (_c = notificationMessage_1.NM === null || notificationMessage_1.NM === void 0 ? void 0 : notificationMessage_1.NM[nmKey]) === null || _c === void 0 ? void 0 : _c.body) === null || _d === void 0 ? void 0 : _d[language];
    return await Promise.all(notificationTokens.map(async (token) => {
        return await (0, exports.sendPushNotification)(token, title, body, data);
    }));
};
exports.sendPushNotificationByUserId = sendPushNotificationByUserId;
const sendPushNotification = async (to, title, body, data) => {
    const message = {
        to,
        sound: 'default',
        title,
        body,
        data,
    };
    const result = await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
    return result;
};
exports.sendPushNotification = sendPushNotification;
//# sourceMappingURL=notification.js.map