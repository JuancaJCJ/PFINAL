const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = {
  uploadFile: (tempFile) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(tempFile, (err, result) => {
        err ? reject(error) : resolve(result);
      });
    });
  },
};
