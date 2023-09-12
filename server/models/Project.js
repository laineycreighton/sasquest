const { Schema, model } = require("mongoose");
const timelineSchema = require("./TimeLines");
const wireframeSchema = require("./WireFrame");

const projectSchema = new Schema({
  title: {
    type: String,
    required: "Please give your project a title!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  repoURL: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  deployedURL: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

  timelines: [timelineSchema],
  wireframes: [wireframeSchema],
});

const Project = model("Project", projectSchema);

module.exports = Project;
