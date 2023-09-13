const { Schema, Types, model } = require("mongoose");

const timelineSchema = new Schema({
  date: {
    type: Date,
    required: true,
    get: (date) => date.toLocaleDateString(),
  },
  goal: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
});

const Timeline = model("Timeline", timelineSchema);

module.exports = Timeline;
