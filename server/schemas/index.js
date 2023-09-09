const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

User.hasMany(Project, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Project.belongsTo(User, {
    foreignKey: "user_id",
    });

module.exports = { typeDefs, resolvers };