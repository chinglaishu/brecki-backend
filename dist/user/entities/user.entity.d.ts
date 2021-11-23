import { ACCOUNT_TYPE_NUM, LANGUAGE, ROLE_NUM } from '../../constant/constant';
import * as mongoose from 'mongoose';
import { BaseEntity, Friend, PersonalInfo, Target } from '../../utils/base/base.entity';
export declare type UserDocument = User & mongoose.Document;
export declare class User extends BaseEntity {
    username: string;
    password: string;
    phone: string;
    roleNum: ROLE_NUM;
    displayName: string;
    personalInfo: PersonalInfo;
    target: Target;
    friends: Friend[];
    language: LANGUAGE;
    accountTypeNum: ACCOUNT_TYPE_NUM;
    socialId: string;
    firebaseEmail: string;
    firebasePassword: string;
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<User, any, any>, mongoose.Model<mongoose.Document<User, any, any>, any, any>, undefined, {}>;
