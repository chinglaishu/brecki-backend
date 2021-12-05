import { HttpException, Injectable } from '@nestjs/common';
import { CreateSubmitQuestionRecordDto } from './dto/create-submitQuestionRecord.dto';
import { UpdateSubmitQuestionRecordDto } from './dto/update-submitQuestionRecord.dto';
import { BaseService } from "../utils/base/base.service";
import { SubmitQuestionRecord, SubmitQuestionRecordDocument } from './entities/submitQuestionRecord.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubmitQuestionRecordFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class SubmitQuestionRecordService extends BaseService<CreateSubmitQuestionRecordDto, UpdateSubmitQuestionRecordDto, SubmitQuestionRecordFilterOption> {
  constructor(
    @InjectModel(SubmitQuestionRecord.name) public model: Model<SubmitQuestionRecordDocument>,
  ) {
    super(model);
    this.createAddUserId = true;
  }


  async findOne(id: string, throwErrorIfNotFound: boolean = false, checkBelongToUser: User | null = null) {
    const filter = this.getFilterByIfCheckBelongToUser(id, checkBelongToUser);
    const result = await this.model.findOne(filter);
    if (!result && throwErrorIfNotFound) {
      throw new HttpException("item not found or do not belong to user", 500);
    }
    return await result.populate("questionChoiceRecords").execPopulate();
  }
}
