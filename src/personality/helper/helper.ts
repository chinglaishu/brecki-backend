import { QuestionScoreRecord } from "src/questionScoreRecord/entities/questionScoreRecord.entity";
import { PersonalityScore } from "src/utils/base/base.entity";
import { Personality } from "../entities/personality.entity";

const personalityHelper = {
  getBasePersonality(personalities: Personality[]) {
    const obj: any = {};
    for (let i = 0 ; i < personalities.length ; i++) {
      obj[personalities[i].key] = 0;
    }
    return obj;
  },
  getAverageScore(personalityScore: PersonalityScore, questionScoreRecords: QuestionScoreRecord[]) {
    for (let i = 0 ; i < questionScoreRecords.length ; i++) {
      // const {personalityScore} = questionScoreRecords[i];
      this.addUpPersonalityScore(personalityScore, questionScoreRecords[i].personalityScore);
    }
    const keys = Object.keys(personalityScore);
    for (let i = 0 ; i < keys.length ; i++) {
      personalityScore[keys[i]] = personalityScore[keys[i]] / questionScoreRecords.length;
    }
    return personalityScore;
  },
  addUpPersonalityScore(scoreA: PersonalityScore, scoreB: PersonalityScore) {
    const keys = Object.keys(scoreA);
    for (let i = 0 ; i < keys.length ; i++) {
      scoreA[keys[i]] += scoreB[keys[i]];
    }
  },
};

export default personalityHelper;
