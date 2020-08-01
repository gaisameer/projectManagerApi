const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  proDescription: {
    type: String,
    trim: true,
  },

  members: {
    type: { type: String },
    value: [String],
  },

  guide: {
    type: String,
    required: true,
  },
});

const project = new mongoose.model("project", projectSchema);

module.exports = project;
