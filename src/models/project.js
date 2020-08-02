const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

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
    type: [String],
  },

  guide: {
    type: String,
    required: true,
  },
});

projectSchema.plugin(uniqueValidator);
const project = new mongoose.model("project", projectSchema);

module.exports = project;
