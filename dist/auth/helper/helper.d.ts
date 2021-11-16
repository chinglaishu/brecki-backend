import { User } from "src/user/entities/user.entity";
declare const authHelper: {
    setCodeForUser(cache: any, useKey: string, ttl?: number): Promise<string>;
    checkIfCodeValid(cache: any, useKey: string, code: string, isDelete?: boolean): Promise<true>;
    generatePassword(length: number): string;
    editEmailContent(content: string, user: User): string;
};
export default authHelper;
