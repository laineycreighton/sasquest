const { Schema, model } = require("mongoose");

const infoSchema = new Schema({
  // TODO: Add your schema here
});

const Info = model("Info", infoSchema);

module.exports = Info;
