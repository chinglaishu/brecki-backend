import { ACCOUNT_TYPE_NUM, MATCH_METHOD_NUM, MATCH_STATUS_NUM, ROLE_NUM } from "../../constant/constant";
export declare class BaseFilterOption {
    id?: string;
    from?: any;
    to?: any;
}
export declare class UserFilterOption extends BaseFilterOption {
    username?: string;
    roleNum?: ROLE_NUM;
    phone?: string;
    socialId?: string;
    accountTypeNum?: ACCOUNT_TYPE_NUM;
}
export declare class TemplateFilterOption extends BaseFilterOption {
}
export declare class MatchFilterOption extends BaseFilterOption {
    userId?: string;
    toUserId?: string;
    method?: MATCH_METHOD_NUM;
    status?: MATCH_STATUS_NUM;
}
export declare class QuestionFilterOption extends BaseFilterOption {
}
export declare class PersonalityFilterOption extends BaseFilterOption {
}
export declare class QuestionChoiceRecordFilterOption extends BaseFilterOption {
}
export declare class SubmitQuestionRecordFilterOption extends BaseFilterOption {
}
export declare class QuestionScoreRecordFilterOption extends BaseFilterOption {
    userId?: string;
    toUserId?: string;
}
export declare class QuestionChoiceFilterOption extends BaseFilterOption {
}
export declare class QuestionNumFilterOption extends BaseFilterOption {
}
export declare class SystemMatchFilterOption extends BaseFilterOption {
    userId?: string;
}
export declare class ManualMatchFilterOption extends BaseFilterOption {
    userId?: string;
}
export declare class SubmitQuestionScoreRecordFilterOption {
}
