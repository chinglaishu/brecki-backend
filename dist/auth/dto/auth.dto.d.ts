import { ACCOUNT_TYPE_NUM } from 'src/constant/constant';
export declare class SocialAuthDto {
    accountTypeNum: ACCOUNT_TYPE_NUM;
    token: string;
    clientId: string;
}
export declare class SignupDto {
    username: string;
    password: string;
    phone: string;
}
export declare class SMSRequestDto {
    phone: string;
}
export declare class SMSVerifyDto {
    phone: string;
    code: string;
}
export declare class LoginDto {
    username: string;
    password: string;
}
export declare class ForgetPasswordRequestDto {
    username: string;
    phone: string;
}
export declare class ForgetPasswordDto {
    username: string;
    newPassword: string;
    code: string;
}
export declare class ResetPasswordDto {
    oldPassword: string;
    newPassword: string;
}
export declare class ChangeContactDto {
    phone: string;
    code: string;
}
export declare class CreateRefreshTokenDto {
    userId: string;
    refreshToken: string;
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
