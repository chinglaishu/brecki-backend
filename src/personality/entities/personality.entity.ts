import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BaseEntity, MultiLang } from '../../utils/base/base.entity';

export type PersonalityDocument = Personality & mongoose.Document;

@Schema()
export class Personality extends BaseEntity {
  @Prop({ index: { unique: true }})
  key: string;
  @Prop()
  name: MultiLang;
  @Prop()
  description: MultiLang;
};

export const PersonalitySchema = SchemaFactory.createForClass(Personality);

PersonalitySchema.virtual('id').get(function(){
  return this._id.toHexString();
});

PersonalitySchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});
