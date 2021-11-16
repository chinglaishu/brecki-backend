"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../constant/config");
const nodemailer = require("nodemailer");
const emailer = nodemailer.createTransport({
    host: config_1.SMTP_HOST,
    port: config_1.SMTP_PORT,
    secure: false,
    auth: {
        user: config_1.SMTP_USERNAME,
        pass: config_1.SMTP_PASSWORD
    },
    tls: {
        ciphers: 'SSLv3'
    }
});
const emailHandler = {
    async sendMail(from, to, subject, html, attachments = []) {
        const mailOptions = {
            from: `INDICAID LAB <${from}>`,
            to,
            subject,
            html,
            attachments,
        };
        emailer.sendMail(mailOptions);
        return true;
    },
};
exports.default = emailHandler;
//# sourceMappingURL=emailHandler.js.map