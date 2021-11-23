import { AuthService } from "./auth.service";
import { SignupDto, LoginDto, ResetPasswordDto, ForgetPasswordDto, ForgetPasswordRequestDto, RefreshTokenDto, SMSRequestDto, SocialAuthDto, SMSVerifyDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { ConfigService } from 'src/config/config.service';
import { LANGUAGE } from '../constant/constant';
export declare class AuthController {
    service: AuthService;
    userService: UserService;
    configService: ConfigService;
    constructor(service: AuthService, userService: UserService, configService: ConfigService);
    socialAuth(socialAuthDto: SocialAuthDto): Promise<{
        user: any;
        token: any;
        refreshToken: any;
    }>;
    signupRequest(smsRequestDto: SMSRequestDto, lang: LANGUAGE): Promise<boolean>;
    forgetPasswordToken(body: ForgetPasswordRequestDto, lang: LANGUAGE): Promise<boolean>;
    checkUserNameAvailable(username: string, lang: LANGUAGE): Promise<boolean>;
    signup(signupDto: SignupDto, lang: LANGUAGE): Promise<{
        user: import("src/user/entities/user.entity").UserDocument;
        token: any;
        refreshToken: any;
    }>;
    SMSVerifyOnly(smsVerifyDto: SMSVerifyDto, lang: LANGUAGE): Promise<boolean>;
    signupSMSVerify(user: User, smsVerifyDto: SMSVerifyDto, lang: LANGUAGE): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        user: any;
        token: any;
        refreshToken: any;
    }>;
    forgetPassword(forgetPasswordDto: ForgetPasswordDto): Promise<boolean>;
    resetPassword(resetPasswordDto: ResetPasswordDto, user: User): Promise<boolean>;
    refreshToken(refreshTokenDto: RefreshTokenDto, lang: LANGUAGE): Promise<{
        token: any;
        refreshToken: any;
    }>;
}
