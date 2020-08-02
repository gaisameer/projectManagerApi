const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },

    log: {
      type: String,
      trim: true,
      // required : true
    },

    user: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const log = new mongoose.model("logs", logSchema);

module.exports = log;
