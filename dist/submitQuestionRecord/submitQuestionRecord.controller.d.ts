import { SubmitQuestionRecordService } from './submitQuestionRecord.service';
import { CreateSubmitQuestionRecordDto } from './dto/create-submitQuestionRecord.dto';
import { UpdateSubmitQuestionRecordDto } from './dto/update-submitQuestionRecord.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { SubmitQuestionRecordFilterOption } from 'src/core/filter/filter';
export declare class SubmitQuestionRecordController extends BaseController<CreateSubmitQuestionRecordDto, UpdateSubmitQuestionRecordDto, SubmitQuestionRecordFilterOption> {
    service: SubmitQuestionRecordService;
    constructor(service: SubmitQuestionRecordService);
}
