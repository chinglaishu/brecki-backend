import { CreateQuestionScoreRecordDto } from './dto/create-questionScoreRecord.dto';
import { UpdateQuestionScoreRecordDto } from './dto/update-questionScoreRecord.dto';
import { BaseService } from "../utils/base/base.service";
import { QuestionScoreRecordDocument } from './entities/questionScoreRecord.entity';
import { Model } from 'mongoose';
import { QuestionScoreRecordFilterOption } from 'src/core/filter/filter';
export declare class QuestionScoreRecordService extends BaseService<CreateQuestionScoreRecordDto, UpdateQuestionScoreRecordDto, QuestionScoreRecordFilterOption> {
    model: Model<QuestionScoreRecordDocument>;
    constructor(model: Model<QuestionScoreRecordDocument>);
}
