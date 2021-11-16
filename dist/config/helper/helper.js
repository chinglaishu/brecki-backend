"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../constant/config");
const constant_1 = require("../../constant/constant");
const smsHandler_1 = require("../../core/sms/smsHandler");
const configHelper = {
    async sendMessage(subject, content, to, messageMethodNum) {
        smsHandler_1.default.sendMessage(config_1.TWILIO_PHONE_NUM, to, content);
    },
};
exports.default = configHelper;
//# sourceMappingURL=helper.js.map