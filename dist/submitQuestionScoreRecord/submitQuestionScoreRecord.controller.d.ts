import { SubmitQuestionScoreRecordService } from './submitQuestionScoreRecord.service';
import { CreateSubmitQuestionScoreRecordDto, CreateWithScoreRecordDto } from './dto/create-submitQuestionScoreRecord.dto';
import { UpdateSubmitQuestionScoreRecordDto } from './dto/update-submitQuestionScoreRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { SubmitQuestionScoreRecordFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
import { LANGUAGE } from 'src/constant/constant';
import { QuestionScoreRecordService } from 'src/questionScoreRecord/questionScoreRecord.service';
import { SubmitQuestionScoreRecord } from './entities/submitQuestionScoreRecord.entity';
import { PersonalityService } from 'src/personality/personality.service';
import { UserService } from 'src/user/user.service';
export declare class SubmitQuestionScoreRecordController extends BaseController<CreateSubmitQuestionScoreRecordDto, UpdateSubmitQuestionScoreRecordDto, SubmitQuestionScoreRecordFilterOption> {
    service: SubmitQuestionScoreRecordService;
    questionScoreRecordService: QuestionScoreRecordService;
    personalityService: PersonalityService;
    userService: UserService;
    constructor(service: SubmitQuestionScoreRecordService, questionScoreRecordService: QuestionScoreRecordService, personalityService: PersonalityService, userService: UserService);
    createWithScoreRecord(user: User, createDto: CreateWithScoreRecordDto, lang: LANGUAGE): Promise<SubmitQuestionScoreRecord>;
}
