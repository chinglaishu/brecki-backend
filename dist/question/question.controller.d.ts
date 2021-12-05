import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { BaseController } from 'src/utils/base/base.controller';
import { QuestionFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
export declare class QuestionController extends BaseController<CreateQuestionDto, UpdateQuestionDto, QuestionFilterOption> {
    service: QuestionService;
    constructor(service: QuestionService);
    getRequestToAnswer(user: User, num: number): Promise<any>;
}
