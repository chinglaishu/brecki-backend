import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from "../utils/base/base.service";
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import { UserFilterOption } from 'src/core/filter/filter';
export declare class UserService extends BaseService<CreateUserDto, UpdateUserDto, UserFilterOption> {
    model: Model<UserDocument>;
    constructor(model: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<UserDocument>;
    checkIsIdOfUser(user: User, id: string): Promise<boolean>;
    addUserToFriendList(user: User, friendUserId: string): Promise<any>;
    removeUserFromFriendList(user: User, friendUserId: string): Promise<User>;
    getRandomUserWithPerference(user: User): Promise<any>;
}
