"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
const common_1 = require("@nestjs/common");
exports.Sort = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    let { sort } = request.query;
    if (sort === undefined || sort === null) {
        return {};
    }
    const useSort = JSON.parse(sort);
    if (useSort["id"]) {
        useSort["_id"] = useSort["id"];
        delete useSort["id"];
    }
    return useSort;
});
//# sourceMappingURL=sort.decorator.js.map