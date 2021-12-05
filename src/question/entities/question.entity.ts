import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Personality } from 'src/personality/entities/personality.entity';
import { BaseEntity, MultiLang, QuestionChoice } from '../../utils/base/base.entity';

export type QuestionDocument = Question & mongoose.Document;

@Schema()
export class Question extends BaseEntity {
  @Prop()
  title: MultiLang;
  @Prop()
  questionChoiceIds: string[];
  questionChoices: QuestionChoice[];
  @Prop()
  defaultPersonalityKeys: string[];
  // defaultPersonalitys: Personality[];
  @Prop({default: false})
  isPaint: boolean;
  @Prop()
  imageUrl: string;
};

export const QuestionSchema = SchemaFactory.createForClass(Question);

QuestionSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

QuestionSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});

QuestionSchema.virtual("questionChoices", {
  ref: "QuestionChoice",
  localField: "questionChoiceIds",
  foreignField: "_id",
});

QuestionSchema.virtual("defaultPersonalitys", {
  ref: "Personality",
  localField: "defaultPersonalityKeys",
  foreignField: "key",
});
