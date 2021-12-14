import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BaseEntity, MultiLang } from '../../utils/base/base.entity';

export type QuestionNumDocument = QuestionNum & mongoose.Document;

@Schema()
export class QuestionNum extends BaseEntity {
  @Prop({ index: { unique: true }, required: true })
  questionNum: number;
  @Prop()
  description: MultiLang;
}

export const QuestionNumSchema = SchemaFactory.createForClass(QuestionNum);

QuestionNumSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

QuestionNumSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});
