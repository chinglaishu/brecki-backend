import { CreateQuestionChoiceDto } from './dto/create-questionChoice.dto';
import { UpdateQuestionChoiceDto } from './dto/update-questionChoice.dto';
import { BaseService } from "../utils/base/base.service";
import { QuestionChoiceDocument } from './entities/questionChoice.entity';
import { Model } from 'mongoose';
import { QuestionChoiceFilterOption } from 'src/core/filter/filter';
export declare class QuestionChoiceService extends BaseService<CreateQuestionChoiceDto, UpdateQuestionChoiceDto, QuestionChoiceFilterOption> {
    model: Model<QuestionChoiceDocument>;
    constructor(model: Model<QuestionChoiceDocument>);
}
