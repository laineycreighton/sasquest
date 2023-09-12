const { Schema, Types } = require("mongoose");

const timelineSchema = new Schema({
  timeLineId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  date: {
    type: Date,
    required: true,
  },
  goal: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
});

module.exports = timelineSchema;
