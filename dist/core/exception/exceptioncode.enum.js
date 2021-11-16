"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppErrorCode = void 0;
var AppErrorCode;
(function (AppErrorCode) {
    AppErrorCode[AppErrorCode["UNKNOWN_ERROR"] = 10000] = "UNKNOWN_ERROR";
    AppErrorCode[AppErrorCode["INVALID_PARAMS"] = 10001] = "INVALID_PARAMS";
    AppErrorCode[AppErrorCode["FORBIDDEN"] = 10002] = "FORBIDDEN";
    AppErrorCode[AppErrorCode["MAIL_ERROR"] = 10003] = "MAIL_ERROR";
    AppErrorCode[AppErrorCode["TOKEN_INVALID"] = 10004] = "TOKEN_INVALID";
    AppErrorCode[AppErrorCode["PASSWORD_USED_RECENTLY"] = 10005] = "PASSWORD_USED_RECENTLY";
    AppErrorCode[AppErrorCode["UNAUTHORIZED"] = 10006] = "UNAUTHORIZED";
    AppErrorCode[AppErrorCode["OBJECT_EXISTED"] = 10007] = "OBJECT_EXISTED";
    AppErrorCode[AppErrorCode["REGISTERED_USER"] = 10008] = "REGISTERED_USER";
    AppErrorCode[AppErrorCode["LOGIN_FAIL"] = 10010] = "LOGIN_FAIL";
    AppErrorCode[AppErrorCode["ALREADY_IN_FRIEND_LIST"] = 20000] = "ALREADY_IN_FRIEND_LIST";
})(AppErrorCode = exports.AppErrorCode || (exports.AppErrorCode = {}));
//# sourceMappingURL=exceptioncode.enum.js.map