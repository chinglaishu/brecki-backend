import { QuestionScoreRecord } from "src/questionScoreRecord/entities/questionScoreRecord.entity";
import { User } from "src/user/entities/user.entity";
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
  // now use get last score only
  // getAverageScore(personalityScore: PersonalityScore, questionScoreRecords: QuestionScoreRecord[]) {
  //   for (let i = 0 ; i < questionScoreRecords.length ; i++) {
  //     // const {personalityScore} = questionScoreRecords[i];
  //     this.addUpPersonalityScore(personalityScore, questionScoreRecords[i].personalityScore);
  //   }
  //   const keys = Object.keys(personalityScore);
  //   for (let i = 0 ; i < keys.length ; i++) {
  //     personalityScore[keys[i]] = personalityScore[keys[i]] / questionScoreRecords.length;
  //   }
  //   return personalityScore;
  // },
  getNewScore(user: User, newPersonalityScore: PersonalityScore) {
    const {personalityScoreNum, personalityScore} = user;
    const oldPersonalityScore = {...personalityScore};
    const keys = Object.keys(newPersonalityScore);
    for (let i = 0 ; i < keys.length ; i++) {
      oldPersonalityScore[keys[i]] = (oldPersonalityScore[keys[i]] * personalityScoreNum + newPersonalityScore[keys[i]]) / (personalityScoreNum + 1);
    }
    return oldPersonalityScore;
  },
  addUpPersonalityScore(scoreA: PersonalityScore, scoreB: PersonalityScore) {
    const keys = Object.keys(scoreA);
    for (let i = 0 ; i < keys.length ; i++) {
      scoreA[keys[i]] += scoreB[keys[i]];
    }
  },
};

export default personalityHelper;
