import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { DEFAULT_MULTILANG } from 'src/constant/constant';
import { BaseEntity, MultiLang } from '../../utils/base/base.entity';

export type QuestionChoiceDocument = QuestionChoice & mongoose.Document;

@Schema()
export class QuestionChoice extends BaseEntity {
  @Prop({default: DEFAULT_MULTILANG})
  choice: MultiLang;
  @Prop({default: false})
  isFree: boolean;
  @Prop({default: false})
  isPaint: boolean;
}

export const QuestionChoiceSchema = SchemaFactory.createForClass(QuestionChoice);

QuestionChoiceSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

QuestionChoiceSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});
