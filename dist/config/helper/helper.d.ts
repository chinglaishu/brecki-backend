import { MESSAGE_METHOD_NUM } from "src/constant/constant";
declare const configHelper: {
    sendMessage(subject: string, content: string, to: string, messageMethodNum: MESSAGE_METHOD_NUM): Promise<void>;
};
export default configHelper;
