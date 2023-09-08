const { Schema, model } = require("mongoose");

const wireframeSchema = new Schema({
  // TODO: Add your schema here
});

const Wireframe = model("Wireframe", wireframeSchema);

module.exports = Wireframe;
