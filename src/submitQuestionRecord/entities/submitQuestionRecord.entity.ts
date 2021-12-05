import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { QuestionChoiceRecord } from 'src/questionChoiceRecord/entities/questionChoiceRecord.entity';
import { BaseEntity } from '../../utils/base/base.entity';

export type SubmitQuestionRecordDocument = SubmitQuestionRecord & mongoose.Document;

@Schema()
export class SubmitQuestionRecord extends BaseEntity {
  @Prop()
  userId: string;
  @Prop()
  questionChoiceRecordIds: string[];
  questionChoiceRecords: QuestionChoiceRecord[];
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
