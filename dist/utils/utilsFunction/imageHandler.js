"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeImageAndGetBuffer = void 0;
const Jimp = require("jimp");
const path = require('path');
const changeImageAndGetBuffer = async (img, blur) => {
    const changeImage = await img.resize(400, Jimp.AUTO).quality(60).blur(blur);
    return new Promise((resolve, reject) => {
        changeImage.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(buffer);
            }
        });
    });
};
exports.changeImageAndGetBuffer = changeImageAndGetBuffer;
//# sourceMappingURL=imageHandler.js.map