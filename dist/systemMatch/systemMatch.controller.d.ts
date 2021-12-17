import { SystemMatchService } from './systemMatch.service';
import { CreateSystemMatchDto } from './dto/create-systemMatch.dto';
import { UpdateSystemMatchDto } from './dto/update-systemMatch.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { SystemMatchFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { SystemMatch } from './entities/systemMatch.entity';
export declare class SystemMatchController extends BaseController<CreateSystemMatchDto, UpdateSystemMatchDto, SystemMatchFilterOption> {
    service: SystemMatchService;
    userService: UserService;
    constructor(service: SystemMatchService, userService: UserService);
    requestSystemMatch(user: User, query: any): Promise<any>;
    getSelfSystemMatch(user: User): Promise<SystemMatch>;
}
