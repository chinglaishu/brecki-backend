import { QuestionScoreRecordService } from './questionScoreRecord.service';
import { CreateQuestionScoreRecordDto } from './dto/create-questionScoreRecord.dto';
import { UpdateQuestionScoreRecordDto } from './dto/update-questionScoreRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionScoreRecordFilterOption } from 'src/core/filter/filter';
import { UserService } from 'src/user/user.service';
import { PersonalityService } from 'src/personality/personality.service';
export declare class QuestionScoreRecordController extends BaseController<CreateQuestionScoreRecordDto, UpdateQuestionScoreRecordDto, QuestionScoreRecordFilterOption> {
    service: QuestionScoreRecordService;
    userService: UserService;
    personalityService: PersonalityService;
    constructor(service: QuestionScoreRecordService, userService: UserService, personalityService: PersonalityService);
}
