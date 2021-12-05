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
    fromUserId?: string;
    toUserId?: string;
    method?: MATCH_METHOD_NUM;
    status?: MATCH_STATUS_NUM;
}
export declare class QuestionFilterOption {
}
export declare class PersonalityFilterOption {
}
export declare class QuestionChoiceRecordFilterOption {
}
export declare class SubmitQuestionRecordFilterOption {
}
export declare class QuestionScoreRecordFilterOption {
}
export declare class QuestionChoiceFilterOption {
}
