import { NM, NM_KEY } from "src/constant/notificationMessage";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";

export const sendPushNotificationByUserId = async (userId: string, userService: UserService, nmKey: NM_KEY, data?: any) => {
  const user: User = await userService.findOne(userId);
  const {notificationTokens, language} = user;
  const title = NM?.[nmKey]?.title?.[language];
  const body = NM?.[nmKey]?.body?.[language];
  return await Promise.all(notificationTokens.map(async (token) => {
    return await sendPushNotification(token, title, body, data);
  }));
};

export const sendPushNotification = async (to: string, title: string, body: string, data?: any) => {

  const message = { 
    to,
    sound: 'default',
    title,
    body,
    data,
  };

  const result = await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  return result;
};
