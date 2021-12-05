import { QuestionChoiceService } from './questionChoice.service';
import { CreateQuestionChoiceDto } from './dto/create-questionChoice.dto';
import { UpdateQuestionChoiceDto } from './dto/update-questionChoice.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionChoiceFilterOption } from 'src/core/filter/filter';
export declare class QuestionChoiceController extends BaseController<CreateQuestionChoiceDto, UpdateQuestionChoiceDto, QuestionChoiceFilterOption> {
    service: QuestionChoiceService;
    constructor(service: QuestionChoiceService);
}
