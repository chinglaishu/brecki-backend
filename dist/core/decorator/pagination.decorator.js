"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = exports.PageOption = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../../constant/constant");
class PageOption {
}
exports.PageOption = PageOption;
exports.Pagination = (0, common_1.createParamDecorator)((data, ctx) => {
    const { page = 1, pageSize = constant_1.DEFAULT_PAGE_SIZE } = ctx.switchToHttp().getRequest().query;
    const pageOption = new PageOption();
    pageOption.page = +page;
    pageOption.pageSize = +pageSize;
    return pageOption;
});
//# sourceMappingURL=pagination.decorator.js.map