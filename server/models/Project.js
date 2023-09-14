const { Schema, model } = require("mongoose");
// const timelineSchema = require("./TimeLines");
// const wireframeSchema = require("./WireFrame");

const projectSchema = new Schema({
  title: {
    type: String,
    required: "Please give your project a title!",
    min_length: 1,
    max_length: 280,
    trim: true,
  },
  repoURL: {
    type: String,
    min_length: 1,
    max_length: 280,
    trim: true,
  },
  deployedURL: {
    type: String,
    min_length: 1,
    max_length: 280,
    trim: true,
  },
  description: {
    type: String,
    min_length: 1,
    max_length: 280,
    trim: true,
  },

  timelines: [
    {
      type: Schema.Types.ObjectId,
      ref: "Timeline",
    },
  ],
  wireframes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Wireframe",
    },
  ],
});

const Project = model("Project", projectSchema);

module.exports = Project;
