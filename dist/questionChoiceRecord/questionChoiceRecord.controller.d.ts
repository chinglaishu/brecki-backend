import { QuestionChoiceRecordService } from './questionChoiceRecord.service';
import { CreateQuestionChoiceRecordDto } from './dto/create-questionChoiceRecord.dto';
import { UpdateQuestionChoiceRecordDto } from './dto/update-questionChoiceRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionChoiceRecordFilterOption } from 'src/core/filter/filter';
export declare class QuestionChoiceRecordController extends BaseController<CreateQuestionChoiceRecordDto, UpdateQuestionChoiceRecordDto, QuestionChoiceRecordFilterOption> {
    service: QuestionChoiceRecordService;
    constructor(service: QuestionChoiceRecordService);
}
