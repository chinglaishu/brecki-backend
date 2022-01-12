import { User } from "src/user/entities/user.entity";
import { PersonalityScore, StatisticData } from "src/utils/base/base.entity";
import { AddChatDataRecordDto } from "../dto/create-match.dto";
import { Match } from "../entities/match.entity";
import { ChatDataRecord } from "../type";
declare const matchHelper: {
    addChatDataToRecord(chatDataRecord: ChatDataRecord, body: AddChatDataRecordDto): ChatDataRecord;
    getUseChatData(chatDataRecords: ChatDataRecord[], user: User): ChatDataRecord;
    calculateIntimacy(chatDataRecords: ChatDataRecord[]): number;
    calculateOneIntimacy(chatDataRecord: ChatDataRecord): number;
    getMatchStatistic(matchs: Match[], currentUserId: string): StatisticData;
    getUseUser(match: Match, currentUserId: string): User;
    addStatisticData(statisticData: StatisticData, personalityScore: PersonalityScore, intimacy: number): void;
    addMatchScore(personalityScore: PersonalityScore, score: PersonalityScore, intimacy: number): void;
    getLargestInStatisticData(statisticData: StatisticData): number;
};
export default matchHelper;
