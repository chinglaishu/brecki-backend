import { NM_KEY } from "src/constant/notificationMessage";
import { UserService } from "src/user/user.service";
export declare const sendPushNotificationByUserId: (userId: string, userService: UserService, nmKey: NM_KEY, data?: any) => Promise<Response[]>;
export declare const sendPushNotification: (to: string, title: string, body: string, data?: any) => Promise<Response>;
