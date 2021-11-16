declare const emailHandler: {
    sendMail(from: any, to: any, subject: string, html: string, attachments?: any[]): Promise<boolean>;
};
export default emailHandler;
