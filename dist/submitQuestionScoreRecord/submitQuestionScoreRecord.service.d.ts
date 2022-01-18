import { CreateSubmitQuestionScoreRecordDto } from './dto/create-submitQuestionScoreRecord.dto';
import { UpdateSubmitQuestionScoreRecordDto } from './dto/update-submitQuestionScoreRecord.dto';
import { BaseService } from "../utils/base/base.service";
import { SubmitQuestionScoreRecordDocument } from './entities/submitQuestionScoreRecord.entity';
import { Model } from 'mongoose';
import { QuestionScoreRecordFilterOption } from 'src/core/filter/filter';
export declare class SubmitQuestionScoreRecordService extends BaseService<CreateSubmitQuestionScoreRecordDto, UpdateSubmitQuestionScoreRecordDto, QuestionScoreRecordFilterOption> {
    model: Model<SubmitQuestionScoreRecordDocument>;
    constructor(model: Model<SubmitQuestionScoreRecordDocument>);
    populateExecList(results: any): Promise<any>;
    populateExec(result: any): Promise<any>;
}
