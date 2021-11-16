declare const smsHandler: {
    sendMessage(from: string, to: string, body: string): Promise<boolean>;
};
export default smsHandler;
