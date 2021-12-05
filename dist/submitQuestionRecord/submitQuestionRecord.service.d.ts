import { CreateSubmitQuestionRecordDto } from './dto/create-submitQuestionRecord.dto';
import { UpdateSubmitQuestionRecordDto } from './dto/update-submitQuestionRecord.dto';
import { BaseService } from "../utils/base/base.service";
import { SubmitQuestionRecordDocument } from './entities/submitQuestionRecord.entity';
import { Model } from 'mongoose';
import { SubmitQuestionRecordFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
export declare class SubmitQuestionRecordService extends BaseService<CreateSubmitQuestionRecordDto, UpdateSubmitQuestionRecordDto, SubmitQuestionRecordFilterOption> {
    model: Model<SubmitQuestionRecordDocument>;
    constructor(model: Model<SubmitQuestionRecordDocument>);
    findOne(id: string, throwErrorIfNotFound?: boolean, checkBelongToUser?: User | null): Promise<SubmitQuestionRecordDocument>;
}
