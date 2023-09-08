const { Schema, model } = require("mongoose");

const timelineSchema = new Schema({
  // TODO: Add your schema here
});

const Timeline = model("Timeline", timelineSchema);

module.exports = Timeline;
