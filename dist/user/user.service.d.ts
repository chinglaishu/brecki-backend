import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from "../utils/base/base.service";
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import { UserFilterOption } from 'src/core/filter/filter';
import { QuestionScoreRecord } from 'src/questionScoreRecord/entities/questionScoreRecord.entity';
export declare class UserService extends BaseService<CreateUserDto, UpdateUserDto, UserFilterOption> {
    model: Model<UserDocument>;
    constructor(model: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<UserDocument>;
    checkIsIdOfUser(user: User, id: string): Promise<boolean>;
    addUserToFriendList(user: User, friendUserId: string): Promise<any>;
    removeUserFromFriendList(user: User, friendUserId: string): Promise<User>;
    getRandomWithPerference(user: User, withPreference: boolean, size: number): Promise<any>;
    updatePersonalityScore(user: User, questionScoreRecords: QuestionScoreRecord[]): Promise<any>;
}
