const User = require("../Schemas/userSchema");
const bcrypt = require("bcryptjs");
const auth = require("../Authentication/auth");

//Register a new user
const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message: "You need to enter all the fields",
    });
  }

  const result = await User.exists({ email });

  if (result) {
    return res.status(400).json({
      message: "Email already exists",
    });
  }

  const salt = bcrypt.genSaltSync(10);

  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      return res.status(500).json({
        message: "Something went wrong, please try again",
      });
    }

    User.create({
      firstName,
      lastName,
      email,
      passwordHash: hash,
    }).then((user) => {
      res.status(201).json({
        token: auth.generateToken(user),
      });
    });
  });
};

// exports.registerUser = async (req, res) => {
// };

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "You need to enter all the fields",
    });
  }

  User.findOne({ email })
    .select("+passwordHash")
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      bcrypt.compare(password, user.passwordHash, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Authentification failed, please try again",
          });
        }

        if (!result) {
          return res.status(401).json({
            message: "Invalid credentials",
          });
        }

        res.status(200).json({ token: auth.generateToken(user) });
      });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

// exports.loginUserWithEmailAndPassword = (req, res) => {
// };

// Get user data
const getUserData = async (req, res) => {
  const { _id, displayName } = req.userData;

  User.findById(_id).then((user) => {
    res.status(200).json(user);
  });
};
// exports.getUserData = (req, res) => {
// };

// Get all users

const getAllUsers = async (req, res) => {
  User.find().then((data) => {
    res.status(200).json(data);
  });
};

// exports.getAllUsers = (req, res) => {
// };

//Export modules
module.exports = {
  registerUser,
  loginUser,
  getUserData,
  getAllUsers,
};
