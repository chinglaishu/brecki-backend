import { QuestionScoreRecord } from "src/questionScoreRecord/entities/questionScoreRecord.entity";
import { PersonalityScore } from "src/utils/base/base.entity";
import { Personality } from "../entities/personality.entity";
declare const personalityHelper: {
    getBasePersonality(personalities: Personality[]): any;
    getAverageScore(personalityScore: PersonalityScore, questionScoreRecords: QuestionScoreRecord[]): PersonalityScore;
    addUpPersonalityScore(scoreA: PersonalityScore, scoreB: PersonalityScore): void;
};
export default personalityHelper;
