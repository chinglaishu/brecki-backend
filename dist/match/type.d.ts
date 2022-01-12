export declare type ChatDataRecord = {
    userId: string;
    totalMessageNum: number;
    textNum: number;
    textCharacter: number;
    voiceNum: number;
    voiceLength: number;
    imageNum: number;
    paintNum: number;
};
export declare type CallDataRecord = {
    callNum: number;
    callDuration: number;
};
export declare type ChatMessageType = "text" | "voice" | "image" | "paint";
