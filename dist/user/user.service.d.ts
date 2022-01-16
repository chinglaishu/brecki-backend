import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from "../utils/base/base.service";
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import { UserFilterOption } from 'src/core/filter/filter';
import { QuestionScoreRecord } from 'src/questionScoreRecord/entities/questionScoreRecord.entity';
import { MatchDocument } from 'src/match/entities/match.entity';
import { SystemMatchDocument } from 'src/systemMatch/entities/systemMatch.entity';
import { ManualMatchDocument } from 'src/manualMatch/entities/manualMatch.entity';
export declare class UserService extends BaseService<CreateUserDto, UpdateUserDto, UserFilterOption> {
    model: Model<UserDocument>;
    matchModel: Model<MatchDocument>;
    systemMatchModel: Model<SystemMatchDocument>;
    manualMatchModel: Model<ManualMatchDocument>;
    constructor(model: Model<UserDocument>, matchModel: Model<MatchDocument>, systemMatchModel: Model<SystemMatchDocument>, manualMatchModel: Model<ManualMatchDocument>);
    create(createUserDto: CreateUserDto): Promise<UserDocument>;
    checkIsIdOfUser(user: User, id: string): Promise<boolean>;
    addUserToFriendList(user: User, friendUserId: string): Promise<any>;
    removeUserFromFriendList(user: User, friendUserId: string): Promise<User>;
    getRandomWithPerference(user: User, withPreference: boolean, size: number, isManual: boolean): Promise<any>;
    updatePersonalityScore(user: User, questionScoreRecords: QuestionScoreRecord[]): Promise<any>;
    getUserIdsFromMatch(user: User, isManual: boolean): Promise<string[]>;
}
