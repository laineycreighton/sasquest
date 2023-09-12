const { Schema, Types } = require("mongoose");

const wireframeSchema = new Schema({
  wireFrameId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
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

module.exports = wireframeSchema;
