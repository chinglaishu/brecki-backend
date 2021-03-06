import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BaseEntity, PersonalityScore } from '../../utils/base/base.entity';

export type QuestionScoreRecordDocument = QuestionScoreRecord & mongoose.Document;

@Schema()
export class QuestionScoreRecord extends BaseEntity {
  @Prop({required: true})
  personalityScore: PersonalityScore;
  @Prop({required: true})
  questionId: string;
  @Prop()
  comment: string;
}

export const QuestionScoreRecordSchema = SchemaFactory.createForClass(QuestionScoreRecord);

QuestionScoreRecordSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

QuestionScoreRecordSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});
