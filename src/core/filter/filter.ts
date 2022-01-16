import { ACCOUNT_TYPE_NUM, MATCH_METHOD_NUM, MATCH_STATUS_NUM, ROLE_NUM } from "../../constant/constant";

export class BaseFilterOption {
  id?: string;
  from?: any;
  to?: any;
}

export class UserFilterOption extends BaseFilterOption {
  username?: string;
  roleNum?: ROLE_NUM;
  phone?: string;
  socialId?: string;
  accountTypeNum?: ACCOUNT_TYPE_NUM;
}

export class TemplateFilterOption extends BaseFilterOption {};

export class MatchFilterOption extends BaseFilterOption {
  userIds?: any;
  method?: MATCH_METHOD_NUM;
  status?: MATCH_STATUS_NUM;
};
export class QuestionFilterOption extends BaseFilterOption {};
export class PersonalityFilterOption extends BaseFilterOption {};
export class QuestionChoiceRecordFilterOption extends BaseFilterOption {};
export class SubmitQuestionRecordFilterOption extends BaseFilterOption {};
export class QuestionScoreRecordFilterOption extends BaseFilterOption {
  userId?: string;
  toUserId?: string;
  submitQuestionRecordId?: string;
};
export class QuestionChoiceFilterOption extends BaseFilterOption {};
export class QuestionNumFilterOption extends BaseFilterOption {};
export class SystemMatchFilterOption extends BaseFilterOption {
  userId?: string;
};
export class ManualMatchFilterOption extends BaseFilterOption {
  userId?: string;
};

export class SubmitQuestionScoreRecordFilterOption {
};