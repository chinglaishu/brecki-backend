import { Prop, Schema } from '@nestjs/mongoose';
import { AGE_RANGE_NUM, FRIEND_STATUS_NUM, PERSONALITY_SCORE_KEY, SEX_NUM } from '../../constant/constant';

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class BaseEntity {
  id: string;
  @Prop({ default: () => new Date() })
  createdAt: Date;
  @Prop({ default: () => new Date() })
  updatedAt: Date;
}

export class MultiLang {
  en: string;
  zh: string;
};

export class EmailOrSMSData {
  subject: string;
  content: string;
  replace: string;
};

export type ProfilePicTwoUrl = {
  blurMore: string,
  blurLess: string,
  clear: string,
};

export class PersonalInfo {
  sex: SEX_NUM;
  ageRange: AGE_RANGE_NUM;
  location: PersonalInfoLocation;
  profilePicOneUrl: string;
  profilePicOneFileType?: string;
  profilePicTwoUrl: ProfilePicTwoUrl;
  profilePicTwoFileType?: string;
  targetSex?: SEX_NUM;
  targetAgeRange?: AGE_RANGE_NUM;
  targetLocation?: PersonalInfoLocation;
}

export type PersonalInfoLocation = {
  placeId: string,
  name: MultiLang,
};

export class Friend {
  friendId: string;
  status: FRIEND_STATUS_NUM;
  intimacy: number;
  startFriendDate: Date;
  endFriendDate?: Date;
}

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class QuestionChoice {
  id: string;
  choice: MultiLang;
};

export class PersonalityScore {
  [key: string]: number
};

export class StatisticData {
  [key: string]: any;
};

export class PaginationEntity {
  constructor(totalPage?: number, data?: Array<any>, page?: number, pageSize?: number) {
      this.totalPage = totalPage;
      this.data = data;
      this.page = page;;
      this.pageSize = pageSize;
  }

  totalPage: number;
  page: number;
  pageSize: number;
  data: Array<any>
}
