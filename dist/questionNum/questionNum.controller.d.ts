import { QuestionNumService } from './questionNum.service';
import { CreateQuestionNumDto } from './dto/create-questionNum.dto';
import { UpdateQuestionNumDto } from './dto/update-questionNum.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionNumFilterOption } from 'src/core/filter/filter';
export declare class QuestionNumController extends BaseController<CreateQuestionNumDto, UpdateQuestionNumDto, QuestionNumFilterOption> {
    service: QuestionNumService;
    constructor(service: QuestionNumService);
}
