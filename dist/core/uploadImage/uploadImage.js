"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const AWS = require("aws-sdk");
const config_1 = require("../../constant/config");
const uuid = require("uuid");
const s3Bucket = new AWS.S3({
    accessKeyId: config_1.AWS_ACCESS_KEY_ID,
    secretAccessKey: config_1.AWS_SECRET_ACCESS_KEY,
    region: "ap-southeast-1",
});
const uploadImage = (basePath, fileType, fileData) => {
    const path = `${basePath}/${uuid.v4()}.${fileType}`;
    const data = {
        Bucket: config_1.AWS_BUCKET_NAME,
        Key: path,
        Body: fileData,
        ACL: "public-read",
        ContentEncoding: 'base64'
    };
    return new Promise((resolve, reject) => {
        s3Bucket.upload(data, (err, result) => {
            if (err) {
                console.log(err);
                return reject(false);
            }
            return resolve(result);
        });
    });
};
exports.uploadImage = uploadImage;
//# sourceMappingURL=uploadImage.js.map