//Import the dependencies
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Get the secret key from the environment variable
const secretKey = process.env.SECRET_KEY;

//Generate the token
const generateToken = (user) => {
  return jwt.sign({ _id: user._id, displayName: user.displayName }, secretKey, {
    expiresIn: "1d",
  });
};

exports.generateToken = generateToken;

//Verify the token

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.userData = jwt.verify(token, secretKey);
    next();
  } catch {
    return res.status(401).json({
      message: "Access restricted! Please Login!",
    });
  }
};
exports.verifyToken = verifyToken;

// exports.generateToken = (user) => {
//   return jwt.sign({ _id: user._id, displayName: user.displayName }, secretKey, { expiresIn: '1d' })
// }

// exports.verifyToken = (req, res, next) => {

// }
