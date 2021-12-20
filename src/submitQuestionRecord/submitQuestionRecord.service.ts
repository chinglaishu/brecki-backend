import { HttpException, Injectable } from '@nestjs/common';
import { CreateSubmitQuestionRecordDto } from './dto/create-submitQuestionRecord.dto';
import { UpdateSubmitQuestionRecordDto } from './dto/update-submitQuestionRecord.dto';
import { BaseService } from "../utils/base/base.service";
import { SubmitQuestionRecord, SubmitQuestionRecordDocument } from './entities/submitQuestionRecord.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubmitQuestionRecordFilterOption } from 'src/core/filter/filter';
import { User } from 'src/user/entities/user.entity';
import { Question, QuestionDocument } from 'src/question/entities/question.entity';
import { QuestionService } from 'src/question/question.service';

@Injectable()
export class SubmitQuestionRecordService extends BaseService<CreateSubmitQuestionRecordDto, UpdateSubmitQuestionRecordDto, SubmitQuestionRecordFilterOption> {
  constructor(
    @InjectModel(SubmitQuestionRecord.name) public model: Model<SubmitQuestionRecordDocument>,
    public questionService: QuestionService,
  ) {
    super(model);
    this.createAddUserId = true;
    this.populates = ["questionChoiceRecords"];
  }


  async findOne(id: string, throwErrorIfNotFound: boolean = false, checkBelongToUser: User | null = null) {
    const filter = this.getFilterByIfCheckBelongToUser(id, checkBelongToUser);
    const result = await this.model.findOne(filter);
    if (!result && throwErrorIfNotFound) {
      throw new HttpException("item not found or do not belong to user", 500);
    }
    return await this.populateExec(result);
  }

  async getLastByUserId(userId: string) {
    const results = await this.model.find({userId}).sort({createdAt: 1}).limit(1);
    if (results.length === 0) {return null; }
    return await results[0];
  }

  async populateExecList(results: SubmitQuestionRecordDocument[]) {
    for (let i = 0 ; i < results.length ; i++) {
      results[i] = await results[i].populate("questionChoiceRecords").execPopulate();
      // await this.getQuestionDetail(results[i]);
    }
    return results;
  }

  async populateExec(result: SubmitQuestionRecordDocument) {
    for (let i = 0 ; i < this.populates.length ; i++) {
      result = await result.populate("questionChoiceRecords").execPopulate();
      await this.getQuestionDetail(result);
    }
    return result;
  }

  async getQuestionDetail(submitQuestionRecord: SubmitQuestionRecordDocument) {
    const {questionChoiceRecords} = submitQuestionRecord;
    for (let i = 0 ; i < questionChoiceRecords.length ; i++) {
      const question = await this.questionService.findOne(questionChoiceRecords[i].questionId);
      questionChoiceRecords[i].question = question;
    }
  }
}
