import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BaseEntity } from '../../utils/base/base.entity';

export type QuestionChoiceRecordDocument = QuestionChoiceRecord & mongoose.Document;

@Schema()
export class QuestionChoiceRecord extends BaseEntity {
  @Prop({required: true})
  userId: string;
  @Prop()
  questionId: string;
  @Prop()
  choiceId: string;
  @Prop()
  content: string; // for free option 
  @Prop()
  imageUrl: string; // for paint question
};

export const QuestionChoiceRecordSchema = SchemaFactory.createForClass(QuestionChoiceRecord);

QuestionChoiceRecordSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

QuestionChoiceRecordSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});
