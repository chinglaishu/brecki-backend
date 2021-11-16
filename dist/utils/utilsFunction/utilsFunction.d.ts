import { User } from "src/user/entities/user.entity";
declare const utilsFunction: {
    makeRequest(url: string, requestMethod?: any, data?: any, headers?: any): Promise<import("axios").AxiosResponse<any>>;
    getObjKeyPath(useObj: any, keyPathList: string[], defaultResponse: any): any;
    buildUrlWithParams(url: string, paramObj: any): string;
    tryJsonParse(item: string): any;
    checkIfAddUserId(idKey: string, user: User | null, useObj: any): any;
    checkIfAnyFalseInList(useList: any[]): boolean;
    compareId(a: any, b: any): boolean;
    compareTime(a: any, b: any): boolean;
    removeIdFromIdList(useList: any[], item: any): boolean;
    checkIfIsArrayAndHaveItem(item: any): boolean;
    paramsAppendByObj(params: any, useObj: any): void;
    getCheckUser(isCheck: boolean, user: User): User;
    checkReadOnly(readOnly: boolean, user: User): boolean;
};
export default utilsFunction;
