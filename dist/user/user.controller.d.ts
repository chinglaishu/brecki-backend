import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UploadProfilePicDTO } from './dto/update-user.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { UserFilterOption } from 'src/core/filter/filter';
import { User } from './entities/user.entity';
import { PageOption } from 'src/core/decorator/pagination.decorator';
import { SearchOption } from 'src/core/decorator/search.decorator';
import { LANGUAGE } from 'src/constant/constant';
import { ProfilePicTwoUrl } from 'src/utils/base/base.entity';
export declare class UserController extends BaseController<CreateUserDto, UpdateUserDto, UserFilterOption> {
    service: UserService;
    constructor(service: UserService);
    findSelf(user: User): User;
    findAll(user: User, filter: UserFilterOption, pagination: PageOption, sort: any, search: SearchOption): Promise<import("src/utils/base/base.entity").PaginationEntity>;
    create(user: User, createDto: CreateUserDto, lang: LANGUAGE): Promise<import("./entities/user.entity").UserDocument>;
    findOne(user: User, id: string): Promise<any>;
    checkItemExist(filter: UserFilterOption, lang: LANGUAGE): Promise<boolean>;
    update(user: User, id: string, updateDto: UpdateUserDto): Promise<any>;
    remove(user: User, id: string): Promise<any>;
    uploadProfilePicOne(body: UploadProfilePicDTO): Promise<any>;
    uploadProfilePicTwo(body: UploadProfilePicDTO): Promise<ProfilePicTwoUrl>;
    getRandomForQuestionReview(user: User): Promise<any>;
}
