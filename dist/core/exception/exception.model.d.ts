import { HttpException, HttpStatus } from "@nestjs/common";
import { AppErrorCode } from "./exceptioncode.enum";
export declare class ApplicationException extends HttpException {
    private code;
    private errMessage;
    constructor(code?: AppErrorCode, statusCode?: HttpStatus, errMessage?: string);
    getErrorCode(): AppErrorCode;
}
