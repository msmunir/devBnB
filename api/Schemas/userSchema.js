const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true, select: false },
  },
  { timestamps: true }
);

userSchema.virtual("displayName").get(function () {
  return this.firstName + " " + this.lastName;
});

//Creating User model
const User = mongoose.model("User", userSchema);

module.exports = User;
