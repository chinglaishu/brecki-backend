"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const common_1 = require("@nestjs/common");
exports.Filter = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    let { filter } = request.query;
    if (filter === undefined || filter === null) {
        return {};
    }
    const useFilter = JSON.parse(filter);
    if (useFilter["id"]) {
        useFilter["_id"] = useFilter["id"];
        delete useFilter["id"];
    }
    return useFilter;
});
//# sourceMappingURL=filter.decorator.js.map