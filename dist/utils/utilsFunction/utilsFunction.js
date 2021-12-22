"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("../../constant/constant");
const user_entity_1 = require("../../user/entities/user.entity");
const axios_1 = require("axios");
const moment = require("moment");
const common_1 = require("@nestjs/common");
const utilsFunction = {
    async makeRequest(url, requestMethod = "get", data = {}, headers = {}) {
        if (requestMethod.toLowerCase() === "get") {
            const request = await (0, axios_1.default)({
                method: "GET",
                url,
                headers,
            });
            return request;
        }
        else {
            const request = await (0, axios_1.default)({
                method: requestMethod,
                url,
                headers,
                data,
            });
            return request;
        }
    },
    getObjKeyPath(useObj, keyPathList, defaultResponse) {
        let useData = useObj;
        for (let i = 0; i < keyPathList.length; i++) {
            if (useData[keyPathList[i]]) {
                useData = useData[keyPathList[i]];
            }
            else {
                return defaultResponse;
            }
        }
        return useData;
    },
    buildUrlWithParams(url, paramObj) {
        const keyList = Object.keys(paramObj);
        for (let i = 0; i < keyList.length; i++) {
            const addText = (i === 0) ? `?${keyList[i]}=` : `&${keyList[i]}=`;
            url += addText + paramObj[keyList[i]];
        }
        return url;
    },
    tryJsonParse(item) {
        try {
            return JSON.parse(item);
        }
        catch (_a) {
            return item;
        }
    },
    checkIfAddUserId(idKey, user, useObj) {
        if (!user) {
            return useObj;
        }
        const { roleNum, id } = user;
        if (roleNum === constant_1.ROLE_NUM.ADMIN && useObj[constant_1.GET_ALL_KEY]) {
            delete useObj[constant_1.GET_ALL_KEY];
            return useObj;
        }
        if (!(roleNum === constant_1.ROLE_NUM.ADMIN && useObj[idKey])) {
            useObj[idKey] = id;
        }
        delete useObj[constant_1.GET_ALL_KEY];
        return useObj;
    },
    checkIfAnyFalseInList(useList) {
        for (let i = 0; i < useList.length; i++) {
            if (!useList[i]) {
                return true;
            }
        }
        return false;
    },
    compareId(a, b) {
        return String(a) === String(b);
    },
    compareTime(a, b) {
        return moment(a).isSame(moment(b));
    },
    removeIdFromIdList(useList, item) {
        for (let i = 0; i < useList.length; i++) {
            if (this.compareId(useList[i], item)) {
                useList.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    checkIfIsArrayAndHaveItem(item) {
        if (!item) {
            return false;
        }
        if (!Array.isArray(item)) {
            return false;
        }
        if (item.length === 0) {
            return false;
        }
        return true;
    },
    paramsAppendByObj(params, useObj) {
        const keyList = Object.keys(useObj);
        for (let i = 0; i < keyList.length; i++) {
            const key = keyList[i];
            if (!useObj[key]) {
                continue;
            }
            params.append(key, useObj[key]);
        }
    },
    getCheckUser(isCheck, user) {
        return isCheck ? user : null;
    },
    checkReadOnly(readOnly, user) {
        if (readOnly && user.roleNum !== constant_1.ROLE_NUM.ADMIN) {
            throw new common_1.HttpException("read only", 500);
        }
        return true;
    },
    getRemovedItemArray(arr, item) {
        const useArray = JSON.parse(JSON.stringify(arr));
        const index = useArray.indexOf(item);
        if (index === -1) {
            return useArray;
        }
        useArray.splice(index, 1);
        return useArray;
    },
};
exports.default = utilsFunction;
//# sourceMappingURL=utilsFunction.js.map