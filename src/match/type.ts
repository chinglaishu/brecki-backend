
export type ChatDataRecord = {
  userId: string,
  totalMessageNum: number,
  textNum: number,
  textCharacter: number,
  voiceNum: number,
  voiceLength: number,
  imageNum: number,
  paintNum: number,
};

export type CallDataRecord = {
  callNum: number,
  callDuration: number, // in seconds
};

export type ChatMessageType = "text" | "voice" | "image" | "paint";
