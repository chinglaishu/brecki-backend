"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const common_1 = require("@nestjs/common");
const utilsFunction_1 = require("../../utils/utilsFunction/utilsFunction");
const handleArray = (filter) => {
    const keys = Object.keys(filter);
    for (let i = 0; i < keys.length; i++) {
        if (utilsFunction_1.default.checkIfIsArrayAndHaveItem(filter[keys[i]])) {
            filter[keys[i]] = { $in: filter[keys[i]] };
        }
    }
};
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
    handleArray(useFilter);
    console.log(useFilter);
    return useFilter;
});
//# sourceMappingURL=filter.decorator.js.map