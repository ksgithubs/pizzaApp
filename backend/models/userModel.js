const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "A tour must have a duration"],
  },
  email: {
    type: String,
    required: [true, "A tour must have a email"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
