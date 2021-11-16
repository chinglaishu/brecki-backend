"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const utilsFunction_1 = require("../../utils/utilsFunction/utilsFunction");
const exception_model_1 = require("./exception.model");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception instanceof exception_model_1.ApplicationException || exception instanceof common_1.HttpException
            ? exception.getStatus() : common_1.HttpStatus.BAD_REQUEST;
        const message = utilsFunction_1.default.tryJsonParse(exception.message);
        const info = utilsFunction_1.default.getObjKeyPath(exception, ["response", "message", "0"], null);
        response
            .status(status)
            .json({
            message,
            data: null,
            info,
        });
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(Error)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=exception.filter.js.map