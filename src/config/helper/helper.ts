import { TWILIO_PHONE_NUM } from "src/constant/config";
import { MESSAGE_METHOD_NUM } from "src/constant/constant";
import smsHandler from "src/core/sms/smsHandler";

const configHelper = {
  async sendMessage(subject: string, content: string, to: string, messageMethodNum: MESSAGE_METHOD_NUM) {
    smsHandler.sendMessage(TWILIO_PHONE_NUM, to, content); 
  },
};

export default configHelper;
