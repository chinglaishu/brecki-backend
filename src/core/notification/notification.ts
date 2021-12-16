
export const sendPushNotification = async (to: string, title: string, body: string, data: any) => {

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
