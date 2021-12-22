import { MATCH_STATUS_NUM } from 'src/constant/constant';
export declare class UpdateMatchDto {
    status: MATCH_STATUS_NUM;
    blockedIds?: string[];
    quitedIds?: string[];
}
