import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from '../../utils/base/base.entity';

export type ManualMatchDocument = ManualMatch & mongoose.Document;

@Schema()
export class ManualMatch extends BaseEntity {
  @Prop({ index: { unique: true }, required: true })
  userId: string;
  @Prop({default: []})
  matchUserIds: string[];
  matchUsers: User[];
}

export const ManualMatchSchema = SchemaFactory.createForClass(ManualMatch);

ManualMatchSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

ManualMatchSchema.virtual("matchUsers", {
  ref: "User",
  localField: "matchUserIds",
  foreignField: "_id",
});

ManualMatchSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});
