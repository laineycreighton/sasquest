const { Schema, model } = require("mongoose");

const wireframeSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  imageURL: {
    type: String,
    minlength: 1,
    maxlength: 280,
  },
  note: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
});

const Wireframe = model("Wireframe", wireframeSchema);

module.exports = Wireframe;
