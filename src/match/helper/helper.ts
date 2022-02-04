import { HttpException } from "@nestjs/common";
import { IMAGE_WEIGHT, MAX_INTIMACY_LEVEL, PAINT_WEIGHT, TEXT_WEIGHT, VOICE_WEIGHT } from "src/constant/constant";
import { QuestionScoreRecord } from "src/questionScoreRecord/entities/questionScoreRecord.entity";
import { SubmitQuestionScoreRecord } from "src/submitQuestionScoreRecord/entities/submitQuestionScoreRecord.entity";
import { User } from "src/user/entities/user.entity";
import { PersonalityScore, StatisticData } from "src/utils/base/base.entity";
import { AddChatDataRecordDto } from "../dto/create-match.dto";
import { Match } from "../entities/match.entity";
import { ChatDataRecord } from "../type";

const matchHelper = {
  addChatDataToRecord(chatDataRecord: ChatDataRecord, body: AddChatDataRecordDto) {
    const {type, length} = body;
    const useLength = length || 0;
    chatDataRecord.totalMessageNum += 1;
    if (type === "image") {
      chatDataRecord.imageNum += 1;
    } else if (type === "paint") {
      chatDataRecord.paintNum += 1;
    } else if (type === "text") {
      chatDataRecord.textNum += 1;
      chatDataRecord.textCharacter += useLength;
    } else if (type === "voice") {
      chatDataRecord.voiceNum += 1;
      chatDataRecord.voiceLength += useLength;
    }
    return chatDataRecord;
  },
  getUseChatData(chatDataRecords: ChatDataRecord[], user: User) {
    for (let i = 0 ; i < chatDataRecords.length ; i++) {
      if (chatDataRecords[i].userId === user.id) {
        return chatDataRecords[i];
      }
    }

    const defaultChatDataRecord: ChatDataRecord = {
      userId: user.id,
      textNum: 0,
      textCharacter: 0,
      totalMessageNum: 0,
      imageNum: 0,
      paintNum: 0,
      voiceNum: 0,
      voiceLength: 0,
    };

    chatDataRecords.push(defaultChatDataRecord);

    return defaultChatDataRecord;
  },
  calculateIntimacy(chatDataRecords: ChatDataRecord[]) {
    if (chatDataRecords.length !== 2) {
      return 0;
      // throw new HttpException("error, chat data records length should be 2", 500);
    }
    const a = matchHelper.calculateOneIntimacy(chatDataRecords[0]);
    const b = matchHelper.calculateOneIntimacy(chatDataRecords[1]);
    const sum = a + b;
    const diff = Math.abs(a - b);
    const percentage = (sum - diff) / sum;
    const value = sum * percentage;
    return value;
  },
  calculateOneIntimacy(chatDataRecord: ChatDataRecord) {
    const {textCharacter, voiceLength, paintNum, imageNum} = chatDataRecord;
    const value = (textCharacter * TEXT_WEIGHT + voiceLength * VOICE_WEIGHT + imageNum * IMAGE_WEIGHT + paintNum * PAINT_WEIGHT);
    return value;
  },
  getPersonalityScoreFromQuestionScoreRecords(questionScoreRecords: QuestionScoreRecord[]) {
    if (questionScoreRecords.length === 0) {return {}; }
    const personalityScore = questionScoreRecords[questionScoreRecords.length - 1].personalityScore;
    return personalityScore;
  },
  getSubmitQuestionScoreRecordStatistic(submitQuestionScoreRecords: SubmitQuestionScoreRecord[]) {
    const statisticData: StatisticData = {};
    for (let i = 0 ; i < submitQuestionScoreRecords.length ; i++) {
      const {usePersonalityScore} = submitQuestionScoreRecords[i];
      const applyPersonalityScore = usePersonalityScore || this.getRandomPersonalityScore();
      matchHelper.addStatisticData(statisticData, applyPersonalityScore);
    }
    return statisticData;
  },
  getMatchStatistic(matchs: Match[], currentUserId: string) {
    const statisticData: StatisticData = {};
    for (let i = 0 ; i < matchs.length ; i++) {
      const useUser = matchHelper.getUseUser(matchs[i], currentUserId);
      if (!useUser) {continue; }
      console.log(useUser);
      matchHelper.addStatisticData(statisticData, useUser.personalityScore, matchs[i].intimacy);
    }
    return statisticData;
  },
  getUseUser(match: Match, currentUserId: string) {
    for (let i = 0 ; i < match.users.length ; i++) {
      if (match.users[i].id !== currentUserId) {
        return match.users[i];
      }
    }
    return null;
  },
  addStatisticData(statisticData: StatisticData, personalityScore: PersonalityScore, intimacy: number = MAX_INTIMACY_LEVEL) {
    if (!personalityScore) {return; }
    const keyList = Object.keys(personalityScore);
    let ratio = intimacy / MAX_INTIMACY_LEVEL;
    if (ratio > 1) {ratio = 1; }
    if (ratio < 0) {ratio = 0; }

    for (let i = 0 ; i < keyList.length ; i++) {

      let scoreArea = Math.round(personalityScore[keyList[i]]);
      if (scoreArea < 0) {scoreArea = 0; }
      if (scoreArea > 10) {scoreArea = 10; }

      if (!statisticData[keyList[i]]) {
        statisticData[keyList[i]] = {};
      }

      const currentScore = statisticData[keyList[i]][scoreArea] || 0
      statisticData[keyList[i]][scoreArea] = currentScore + (personalityScore[keyList[i]] * ratio);
    }
  },
  addMatchScore(personalityScore: PersonalityScore, score: PersonalityScore, intimacy: number) {
    const keyList = Object.keys(personalityScore);
    let ratio = intimacy / MAX_INTIMACY_LEVEL;
    if (ratio > 1) {ratio = 1; }
    if (ratio < 0) {ratio = 0; }
    for (let i = 0 ; i < keyList.length ; i++) {
      const currentScore = score[keyList[i]] || 0;
      score[keyList[i]] = currentScore + (personalityScore[keyList[i]] * ratio);
    }
  },
  getRandomPersonalityScore() {
    const personalityScore: PersonalityScore = {
      "Openness": Math.random() * 10,
      "Conscientiousness": Math.random() * 10,
      "Extraversion": Math.random() * 10,
      "Agreeableness": Math.random() * 10,
      "Neuroticism": Math.random() * 10,
    };
    return personalityScore;
  },
  getLargestInStatisticData(statisticData: StatisticData) {
    let max = 0;
    const keyList = Object.keys(statisticData);
    for (let i = 0 ; i < keyList.length ; i++) {
      const useKeyList = Object.keys(statisticData[keyList[i]]);
      for (let a = 0 ; a < useKeyList.length ; a++) {
        const num = statisticData[keyList[i]][useKeyList[a]];
        if (num > max) {max = num; }
      }
    }
    return max;
  },
  // getAverage(score: PersonalityScore, num: number) {
  //   const keyList = Object.keys(score);
  //   for (let i = 0 ; i < keyList.length ; i++) {
  //     score[keyList[i]] = score[keyList[i]] / num;
  //   }
  // },
};

export default matchHelper;
