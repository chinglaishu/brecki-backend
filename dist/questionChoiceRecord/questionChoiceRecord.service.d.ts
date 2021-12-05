import { CreateQuestionChoiceRecordDto } from './dto/create-questionChoiceRecord.dto';
import { UpdateQuestionChoiceRecordDto } from './dto/update-questionChoiceRecord.dto';
import { BaseService } from "../utils/base/base.service";
import { QuestionChoiceRecordDocument } from './entities/questionChoiceRecord.entity';
import { Model } from 'mongoose';
import { QuestionChoiceRecordFilterOption } from 'src/core/filter/filter';
export declare class QuestionChoiceRecordService extends BaseService<CreateQuestionChoiceRecordDto, UpdateQuestionChoiceRecordDto, QuestionChoiceRecordFilterOption> {
    model: Model<QuestionChoiceRecordDocument>;
    constructor(model: Model<QuestionChoiceRecordDocument>);
}
