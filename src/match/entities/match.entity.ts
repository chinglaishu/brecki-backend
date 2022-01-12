import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { MATCH_METHOD_NUM, MATCH_STATUS_NUM } from 'src/constant/constant';
import { SubmitQuestionScoreRecord } from 'src/submitQuestionScoreRecord/entities/submitQuestionScoreRecord.entity';
import { User } from 'src/user/entities/user.entity';
import { BaseEntity } from '../../utils/base/base.entity';
import { CallDataRecord, ChatDataRecord } from '../type';

export type MatchDocument = Match & mongoose.Document;

@Schema()
export class Match extends BaseEntity {
  @Prop({required: true})
  userIds: string[];
  users: User[];
  @Prop({default: []})
  blockedIds: string[];
  @Prop({default: []})
  quitedIds: string[];
  @Prop({default: []})
  chatDataRecords: ChatDataRecord[];
  // @Prop({default: {callNum: 0, callDuration: 0}})
  // callDataRecord: CallDataRecord;
  @Prop({required: true})
  method: MATCH_METHOD_NUM;
  @Prop({default: MATCH_STATUS_NUM.NORMAL})
  status: MATCH_STATUS_NUM;
  @Prop({default: 0})
  intimacy: number;
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

MatchSchema.virtual("users", {
  ref: "User",
  localField: "userIds",
  foreignField: "_id",
});
