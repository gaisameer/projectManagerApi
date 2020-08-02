const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const studSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  registrationId: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    // default : 'TVE17CS001'
  },

  dept: {
    type: String,
    trim: true,
    default: "CS",
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },

  projects: {
    type: [String],
  },
});

studSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const student = mongoose.model("student", studSchema);

module.exports = student;
