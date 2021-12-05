import { QuestionScoreRecordService } from './questionScoreRecord.service';
import { CreateQuestionScoreRecordDto } from './dto/create-questionScoreRecord.dto';
import { UpdateQuestionScoreRecordDto } from './dto/update-questionScoreRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionScoreRecordFilterOption } from 'src/core/filter/filter';
export declare class QuestionScoreRecordController extends BaseController<CreateQuestionScoreRecordDto, UpdateQuestionScoreRecordDto, QuestionScoreRecordFilterOption> {
    service: QuestionScoreRecordService;
    constructor(service: QuestionScoreRecordService);
}
