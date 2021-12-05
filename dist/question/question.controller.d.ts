import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionFilterOption } from 'src/core/filter/filter';
export declare class QuestionController extends BaseController<CreateQuestionDto, UpdateQuestionDto, QuestionFilterOption> {
    service: QuestionService;
    constructor(service: QuestionService);
}
