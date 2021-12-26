import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { QuestionScoreRecord } from 'src/questionScoreRecord/entities/questionScoreRecord.entity';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity, PersonalityScore } from '../../utils/base/base.entity';

export type SubmitQuestionScoreRecordDocument = SubmitQuestionScoreRecord & mongoose.Document;

@Schema()
export class SubmitQuestionScoreRecord extends BaseEntity {
  @Prop({required: true})
  userId: string;
  user: User;
  @Prop({required: true})
  toUserId: string;
  toUser: User;
  @Prop({required: true})
  submitQuestionRecordId: string;
  @Prop({required: true})
  questionScoreRecordIds: string[];
  questionScoreRecords: QuestionScoreRecord[];
};

export const SubmitQuestionScoreRecordSchema = SchemaFactory.createForClass(SubmitQuestionScoreRecord);

SubmitQuestionScoreRecordSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

SubmitQuestionScoreRecordSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});

SubmitQuestionScoreRecordSchema.virtual("questionScoreRecords", {
  ref: "QuestionScoreRecord",
  localField: "questionScoreRecordIds",
  foreignField: "_id",
});

SubmitQuestionScoreRecordSchema.virtual("user", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
  justOne: true,
});
