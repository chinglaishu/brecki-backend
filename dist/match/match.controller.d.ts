import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { MatchFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
import { LANGUAGE } from 'src/constant/constant';
import { UserService } from 'src/user/user.service';
export declare class MatchController extends BaseController<CreateMatchDto, UpdateMatchDto, MatchFilterOption> {
    service: MatchService;
    userService: UserService;
    constructor(service: MatchService, userService: UserService);
    create(user: User, createMatchDto: CreateMatchDto, lang: LANGUAGE): Promise<any>;
    update(user: User, id: string, updateMatchDto: UpdateMatchDto, lang: LANGUAGE): Promise<any>;
}
