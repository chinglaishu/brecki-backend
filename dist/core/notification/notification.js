"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPushNotification = void 0;
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