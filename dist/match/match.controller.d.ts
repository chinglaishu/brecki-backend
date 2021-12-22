import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { MatchFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
import { LANGUAGE } from 'src/constant/constant';
import { UserService } from 'src/user/user.service';
import { Match } from './entities/match.entity';
export declare class MatchController extends BaseController<CreateMatchDto, UpdateMatchDto, MatchFilterOption> {
    service: MatchService;
    userService: UserService;
    constructor(service: MatchService, userService: UserService);
    acceptMatch(user: User, id: string, lang: LANGUAGE): Promise<Match>;
    rejectMatch(user: User, id: string, lang: LANGUAGE): Promise<Match>;
    blockMatch(user: User, id: string, lang: LANGUAGE): Promise<Match>;
    unblockMatch(user: User, id: string, lang: LANGUAGE): Promise<Match>;
    quitMatch(user: User, id: string, lang: LANGUAGE): Promise<Match>;
}
