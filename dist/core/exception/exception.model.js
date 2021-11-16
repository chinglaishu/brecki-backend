"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationException = void 0;
const common_1 = require("@nestjs/common");
const exceptioncode_enum_1 = require("./exceptioncode.enum");
class ApplicationException extends common_1.HttpException {
    constructor(code = exceptioncode_enum_1.AppErrorCode.UNKNOWN_ERROR, statusCode = common_1.HttpStatus.BAD_REQUEST, errMessage = "") {
        super(errMessage, statusCode);
        this.code = code;
        this.errMessage = errMessage;
    }
    getErrorCode() {
        return this.code;
    }
}
exports.ApplicationException = ApplicationException;
//# sourceMappingURL=exception.model.js.map