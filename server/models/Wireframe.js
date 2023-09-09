const { Schema, model } = require("mongoose");

const wireframeSchema = new Schema({
  // TODO: Add your schema here
  //   Id
  // ProjectId
  // Title
  // ImageUrl (Cloudanary)
  // Note

  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
    minlength: 1,
    maxlength: 280,
  },

  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  imageUrl: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 280,
  },
  note: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 280,
  },
});

const Wireframe = model("Wireframe", wireframeSchema);

module.exports = Wireframe;
