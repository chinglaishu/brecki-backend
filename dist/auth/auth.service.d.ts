import { Model } from 'mongoose';
import { CreateRefreshTokenDto, SignupDto, SocialAuthDto } from './dto/auth.dto';
import { ConfigService } from 'src/config/config.service';
import { LANGUAGE } from '../constant/constant';
import { UserService } from 'src/user/user.service';
import { TokenDocument } from './entity/token.entity';
import { User } from 'src/user/entities/user.entity';
import { BaseService } from 'src/utils/base/base.service';
export declare class AuthService extends BaseService<CreateRefreshTokenDto, any, any> {
    model: Model<TokenDocument>;
    constructor(model: Model<TokenDocument>);
    getSocialIdFromSocialAuth(socialAuthDto: SocialAuthDto): Promise<string>;
    getSocialIdFromGoogleToken(token: string): Promise<string>;
    getSocialIdFromFacebookToken(token: string): Promise<string>;
    getSocialIdFromAppleToken(token: string, clientId: string): Promise<string>;
    sendCode(cache: any, useKey: string, to: string, configService: ConfigService, lang: LANGUAGE): Promise<boolean>;
    signup(signupDto: SignupDto, userService: UserService): Promise<import("src/user/entities/user.entity").UserDocument>;
    generateRefreshToken(user: User): Promise<any>;
    deleteAllRefreshTokenByUserId(userId: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
