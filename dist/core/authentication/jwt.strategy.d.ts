import { User } from "src/user/entities/user.entity";
import { DecodeTokenObj } from "src/types/common";
import { AppleDecodeToken } from "src/types/auth";
declare const JwtStrategy: {
    sign(userId: any, expireTime: string): string;
    signByUser(user: User, expireTime: string): any;
    verify(token: string): false | DecodeTokenObj;
    getUserIdFromToken(token: string): string;
    getTokenFromReq(req: Request): any;
    decode(token: string): AppleDecodeToken;
};
export default JwtStrategy;
