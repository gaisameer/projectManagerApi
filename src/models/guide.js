const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const guideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
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

guideSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

guideSchema.plugin(uniqueValidator);

const guide = mongoose.model("guide", guideSchema);
module.exports = guide;
