import { SubmitQuestionRecordService } from './submitQuestionRecord.service';
import { CreateSubmitQuestionRecordDto, CreateWithChoiceRecord } from './dto/create-submitQuestionRecord.dto';
import { UpdateSubmitQuestionRecordDto } from './dto/update-submitQuestionRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { SubmitQuestionRecordFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
import { LANGUAGE } from 'src/constant/constant';
import { QuestionChoiceRecordService } from 'src/questionChoiceRecord/questionChoiceRecord.service';
import { UserService } from 'src/user/user.service';
import { SubmitQuestionRecord } from './entities/submitQuestionRecord.entity';
import { SearchOption } from 'src/core/decorator/search.decorator';
import { SubmitQuestionScoreRecordService } from 'src/submitQuestionScoreRecord/submitQuestionScoreRecord.service';
export declare class SubmitQuestionRecordController extends BaseController<CreateSubmitQuestionRecordDto, UpdateSubmitQuestionRecordDto, SubmitQuestionRecordFilterOption> {
    service: SubmitQuestionRecordService;
    questionChoiceRecordService: QuestionChoiceRecordService;
    userService: UserService;
    submitQuestionScoreRecordService: SubmitQuestionScoreRecordService;
    constructor(service: SubmitQuestionRecordService, questionChoiceRecordService: QuestionChoiceRecordService, userService: UserService, submitQuestionScoreRecordService: SubmitQuestionScoreRecordService);
    findAllWithoutPagination(user: User, filter: SubmitQuestionRecordFilterOption, sort?: any, search?: SearchOption): Promise<any[]>;
    createWithChoiceRecord(user: User, createDto: CreateWithChoiceRecord, lang: LANGUAGE): Promise<SubmitQuestionRecord>;
    getUserLast(user: User, userId: string, lang: LANGUAGE): Promise<import("./entities/submitQuestionRecord.entity").SubmitQuestionRecordDocument>;
}
