import { CreateQuestionNumDto } from './dto/create-questionNum.dto';
import { UpdateQuestionNumDto } from './dto/update-questionNum.dto';
import { BaseService } from "../utils/base/base.service";
import { QuestionNumDocument } from './entities/questionNum.entity';
import { Model } from 'mongoose';
import { QuestionNumFilterOption } from 'src/core/filter/filter';
export declare class QuestionNumService extends BaseService<CreateQuestionNumDto, UpdateQuestionNumDto, QuestionNumFilterOption> {
    model: Model<QuestionNumDocument>;
    constructor(model: Model<QuestionNumDocument>);
}
