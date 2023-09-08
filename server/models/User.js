const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  // TODO: Add your schema here
});

const User = model("User", userSchema);

module.exports = User;
