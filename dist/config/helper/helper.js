"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../constant/config");
const constant_1 = require("../../constant/constant");
const emailHandler_1 = require("../../core/email/emailHandler");
const smsHandler_1 = require("../../core/sms/smsHandler");
const configHelper = {
    async sendMessage(subject, content, to, messageMethodNum) {
        return (messageMethodNum === constant_1.MESSAGE_METHOD_NUM.EMAIL)
            ? emailHandler_1.default.sendMail(config_1.SMTP_USERNAME, to, subject, content)
            : smsHandler_1.default.sendMessage(config_1.TWILIO_PHONE_NUM, to, content);
    },
};
exports.default = configHelper;
//# sourceMappingURL=helper.js.map