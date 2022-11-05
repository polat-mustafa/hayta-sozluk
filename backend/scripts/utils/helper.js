const CryptoJS = require("crypto-js");

const encryptPassword = (password) => {
  return CryptoJS.HmacSHA256(
    password,
    CryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH).toString()
  ).toString();
};

module.exports = {
  encryptPassword,
};
