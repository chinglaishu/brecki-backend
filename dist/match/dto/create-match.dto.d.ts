import { MATCH_METHOD_NUM, MATCH_STATUS_NUM } from 'src/constant/constant';
import { ChatDataRecord, ChatMessageType } from "../type";
export declare class CreateMatchDto {
    userIds?: string[];
    method?: MATCH_METHOD_NUM;
    status?: MATCH_STATUS_NUM;
    chatDataRecords?: ChatDataRecord[];
}
export declare class AddChatDataRecordDto {
    type: ChatMessageType;
    length?: number;
}
