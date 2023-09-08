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
  },

  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
});

const Wireframe = model("Wireframe", wireframeSchema);

module.exports = Wireframe;
