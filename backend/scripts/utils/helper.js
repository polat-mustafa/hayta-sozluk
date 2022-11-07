const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const encryptPassword = (password) => {
  return CryptoJS.HmacSHA256(
    password,
    CryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH).toString()
  ).toString();
};

const generateToken = (user) => {
  return jwt.sign(
    {
      ...user,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
};



const verifyToken = (user) => {
  return jwt.sign(
    {
      ...user,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};


module.exports = {
  encryptPassword,
  generateToken,
  verifyToken,
};
