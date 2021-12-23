import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { MATCH_METHOD_NUM, MATCH_STATUS_NUM } from 'src/constant/constant';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from '../../utils/base/base.entity';

export type MatchDocument = Match & mongoose.Document;

@Schema()
export class Match extends BaseEntity {
  @Prop({required: true})
  userId: string;
  user: User;
  @Prop({required: true})
  toUserId: string;
  toUser: User;
  @Prop({default: []})
  blockedIds: string[];
  @Prop({default: []})
  quitedIds: string[];
  @Prop({required: true})
  method: MATCH_METHOD_NUM;
  @Prop({default: MATCH_STATUS_NUM.WAITING})
  status: MATCH_STATUS_NUM;
  @Prop({default: 0})
  intimacyLevel: number;
  @Prop()
  submitQuestionScoreRecordId: string;
}

export const MatchSchema = SchemaFactory.createForClass(Match);

MatchSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

MatchSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {  
    delete ret._id 
    return ret
  }
});

MatchSchema.virtual("user", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
  justOne: true,
});

MatchSchema.virtual("toUser", {
  ref: "User",
  localField: "toUserId",
  foreignField: "_id",
  justOne: true,
});
