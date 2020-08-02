const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const guideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
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
    // type: { type: String },
    // value: [String],

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

const guide = mongoose.model("guide", guideSchema);

module.exports = guide;
