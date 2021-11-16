"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = exports.createSearchFilter = exports.SearchOption = void 0;
const common_1 = require("@nestjs/common");
class SearchOption {
}
exports.SearchOption = SearchOption;
;
const getUseKeyList = (useSearch) => {
    const key = Object.keys(useSearch)[0];
    return key.split(",");
};
const createSearchFilter = (useSearch) => {
    const useKeyList = getUseKeyList(useSearch);
    const value = Object.values(useSearch)[0];
    const useFilterList = [];
    for (let i = 0; i < useKeyList.length; i++) {
        const filter = {};
        const regexp = new RegExp(value, "i");
        useKeyList[i] = useKeyList[i].replace(/ /g, "");
        filter[useKeyList[i]] = regexp;
        useFilterList.push(filter);
    }
    const useObj = {
        $or: useFilterList,
    };
    return useObj;
};
exports.createSearchFilter = createSearchFilter;
exports.Search = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    let { search } = request.query;
    if (search === undefined || search === null) {
        return { searchKey: null, searchValue: null, searchFilter: {} };
    }
    const useSearch = JSON.parse(search);
    if (Object.keys(useSearch).length === 0) {
        return {};
    }
    const searchKey = Object.keys(useSearch)[0];
    const searchValue = Object.values(useSearch)[0];
    const searchFilter = (0, exports.createSearchFilter)(useSearch);
    return { searchKey, searchValue, searchFilter };
});
//# sourceMappingURL=search.decorator.js.map