import { SystemMatchService } from './systemMatch.service';
import { CreateSystemMatchDto } from './dto/create-systemMatch.dto';
import { UpdateSystemMatchDto } from './dto/update-systemMatch.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { SystemMatchFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { SystemMatch } from './entities/systemMatch.entity';
import { LANGUAGE } from 'src/constant/constant';
import { MatchService } from 'src/match/match.service';
export declare class SystemMatchController extends BaseController<CreateSystemMatchDto, UpdateSystemMatchDto, SystemMatchFilterOption> {
    service: SystemMatchService;
    userService: UserService;
    matchService: MatchService;
    constructor(service: SystemMatchService, userService: UserService, matchService: MatchService);
    requestSystemMatch(user: User, query: any): Promise<any>;
    getSelfSystemMatch(user: User): Promise<SystemMatch>;
    likeUser(user: User, toUserId: string, query: any, lang: LANGUAGE): Promise<any>;
    crossUser(user: User, toUserId: string, lang: LANGUAGE): Promise<any>;
}
