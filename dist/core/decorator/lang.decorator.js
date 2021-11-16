"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lang = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../../constant/constant");
const getLangFromHeader = (headers) => {
    const lang = headers[constant_1.LANG_HEADER];
    if (!lang) {
        return constant_1.DEFAULT_LANGUAGE;
    }
    if (lang !== "zh" && lang !== "en") {
        return constant_1.DEFAULT_LANGUAGE;
    }
    return lang;
};
exports.Lang = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const headers = request.headers;
    const lang = getLangFromHeader(headers);
    return lang;
});
//# sourceMappingURL=lang.decorator.js.map