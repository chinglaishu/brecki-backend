
const Jimp = require("jimp");
const path = require('path');

export const changeImageAndGetBuffer = async (img: any, blur: any) => {
  // const result = await image.resize(100, Jimp.AUTO).quality(60).blur(2).write("./new.jpg");
  const changeImage = await img.resize(400, Jimp.AUTO).quality(60).blur(blur);

  return new Promise((resolve, reject) => {
    changeImage.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer);
      }
    });
  });
};
