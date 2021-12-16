import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from '../../utils/base/base.entity';

export type SystemMatchDocument = SystemMatch & mongoose.Document;

@Schema()
export class SystemMatch extends BaseEntity {
  @Prop({ index: { unique: true }, required: true })
  userId: string;
  @Prop({default: []})
  matchUserIds: string[];
  matchUsers: User[];
}

export const SystemMatchSchema = SchemaFactory.createForClass(SystemMatch);

SystemMatchSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

SystemMatchSchema.virtual("matchUsers", {
  ref: "User",
  localField: "matchUserIds",
  foreignField: "_id",
});

SystemMatchSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});
