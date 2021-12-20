import { MATCH_METHOD_NUM, MATCH_STATUS_NUM } from 'src/constant/constant';
export declare class CreateMatchDto {
    userId: string;
    toUserId: string;
    method: MATCH_METHOD_NUM;
    status: MATCH_STATUS_NUM;
}
