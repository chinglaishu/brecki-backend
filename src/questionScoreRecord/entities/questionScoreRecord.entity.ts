import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BaseEntity, PersonalityScoreRecord } from '../../utils/base/base.entity';

export type QuestionScoreRecordDocument = QuestionScoreRecord & mongoose.Document;

@Schema()
export class QuestionScoreRecord extends BaseEntity {
  @Prop()
  userId: string;
  @Prop()
  toUserId: string;
  @Prop()
  personalityScoreRecords: PersonalityScoreRecord[];
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
