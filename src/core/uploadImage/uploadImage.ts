import * as AWS from "aws-sdk";
import { AWS_ACCESS_KEY_ID, AWS_BUCKET_NAME, AWS_SECRET_ACCESS_KEY } from "src/constant/config";
import * as uuid from "uuid";

const s3Bucket = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: "ap-southeast-1",
});

export const uploadImage = (basePath: string, fileType: string, fileData: any) => {
  const path = `${basePath}/${uuid.v4()}.${fileType}`;
  const data = {
    Bucket: AWS_BUCKET_NAME,
    Key: path,
    Body: fileData,
    ACL: "public-read",
    ContentEncoding: 'base64'
  };
  return new Promise((resolve: any, reject: any) => {
    s3Bucket.upload(data, (err: any, result: any) => {
      if (err) {
        console.log(err);
        return reject(false);
      }
      return resolve(result);
    });
  });
};
