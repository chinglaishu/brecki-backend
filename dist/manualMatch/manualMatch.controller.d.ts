import { ManualMatchService } from './manualMatch.service';
import { CreateManualMatchDto } from './dto/create-manualMatch.dto';
import { UpdateManualMatchDto } from './dto/update-manualMatch.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { ManualMatchFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
import { LANGUAGE } from 'src/constant/constant';
import { ManualMatch } from './entities/manualMatch.entity';
import { UserService } from 'src/user/user.service';
import { MatchService } from 'src/match/match.service';
export declare class ManualMatchController extends BaseController<CreateManualMatchDto, UpdateManualMatchDto, ManualMatchFilterOption> {
    service: ManualMatchService;
    userService: UserService;
    matchService: MatchService;
    constructor(service: ManualMatchService, userService: UserService, matchService: MatchService);
    requestManualMatch(user: User, query: any): Promise<any>;
    getSelfManualMatch(user: User): Promise<ManualMatch>;
    createMatch(user: User, toUserId: string, query: any, lang: LANGUAGE): Promise<any>;
}
