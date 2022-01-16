import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { QuestionChoiceRecord } from 'src/questionChoiceRecord/entities/questionChoiceRecord.entity';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from '../../utils/base/base.entity';

export type SubmitQuestionRecordDocument = SubmitQuestionRecord & mongoose.Document;

@Schema()
export class SubmitQuestionRecord extends BaseEntity {
  @Prop()
  userId: string;
  user: User;
  @Prop()
  questionChoiceRecordIds: string[];
  questionChoiceRecords: QuestionChoiceRecord[];
  submitQuestionScoreRecord?: any;
}

export const SubmitQuestionRecordSchema = SchemaFactory.createForClass(SubmitQuestionRecord);

SubmitQuestionRecordSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

SubmitQuestionRecordSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});

SubmitQuestionRecordSchema.virtual("questionChoiceRecords", {
  ref: "QuestionChoiceRecord",
  localField: "questionChoiceRecordIds",
  foreignField: "_id",
});

SubmitQuestionRecordSchema.virtual("user", {
  ref: "QuestionChoiceRecord",
  localField: "questionChoiceRecordIds",
  foreignField: "_id",
  justOne: true,
});
