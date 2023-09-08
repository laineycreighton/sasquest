const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  // TODO: Add your schema here
});

const Project = model("Project", projectSchema);

module.exports = Project;
