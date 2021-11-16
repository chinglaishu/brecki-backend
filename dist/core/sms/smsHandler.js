"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../constant/config");
const client = require('twilio')(config_1.TWILIO_ACCOUNT_SID, config_1.TWILIO_AUTH_TOKEN);
const smsHandler = {
    async sendMessage(from, to, body) {
        to = to.replace(/-/g, "");
        client.messages.create({
            from,
            to,
            body,
        });
        return true;
    },
};
exports.default = smsHandler;
//# sourceMappingURL=smsHandler.js.map