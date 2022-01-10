import { HttpException } from "@nestjs/common";
import { IMAGE_WEIGHT, PAINT_WEIGHT, TEXT_WEIGHT, VOICE_WEIGHT } from "src/constant/constant";
import { User } from "src/user/entities/user.entity";
import { AddChatDataRecordDto } from "../dto/create-match.dto";
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
      chatDataRecord.totalMessageNum += useLength;
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

    return defaultChatDataRecord;
  },
  calculateIntimacy(chatDataRecords: ChatDataRecord[]) {
    if (chatDataRecords.length !== 2) {
      throw new HttpException("error, chat data records length should be 2", 500);
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
};

export default matchHelper;
