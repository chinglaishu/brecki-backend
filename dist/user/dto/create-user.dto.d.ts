import { ACCOUNT_TYPE_NUM } from '../../constant/constant';
export declare class CreateUserDto {
    username?: string;
    password?: string;
    accountTypeNum?: ACCOUNT_TYPE_NUM;
    socialId?: string;
}
