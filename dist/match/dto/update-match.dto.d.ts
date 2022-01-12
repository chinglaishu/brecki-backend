import { MATCH_STATUS_NUM } from 'src/constant/constant';
import { CreateMatchDto } from './create-match.dto';
export declare class UpdateMatchDto extends CreateMatchDto {
    status?: MATCH_STATUS_NUM;
    blockedIds?: string[];
    quitedIds?: string[];
    intimacy?: number;
}
