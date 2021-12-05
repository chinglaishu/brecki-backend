import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { BaseService } from "../utils/base/base.service";
import { QuestionDocument } from './entities/question.entity';
import { Model } from 'mongoose';
import { QuestionFilterOption } from 'src/core/filter/filter';
export declare class QuestionService extends BaseService<CreateQuestionDto, UpdateQuestionDto, QuestionFilterOption> {
    model: Model<QuestionDocument>;
    constructor(model: Model<QuestionDocument>);
}
