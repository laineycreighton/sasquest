const { User, Project, Info, Timeline, Wireframe } = require("../models");

const resolvers = {
  Query: {
    wireframe: async () => {
      return Wireframe.find({});
    },
    wireframeId: async (parent, { _id }) => {
      return Wireframe.findById({ _id });
    },
  },

  Mutation: {
    createWireframe: async (parent, args) => {
      const wireframe = await Wireframe.create(args);
      return wireframe;
    },
    updateWireframe: async (parent, { _id, ...args }) => {
      const wireframe = await Wireframe.findByIdAndUpdate(_id, args, {
        new: true,
      });
      return wireframe;
    },
    deleteWireframe: async (parent, { _id }) => {
      const wireframe = await Wireframe.findByIdAndDelete(_id);
      return wireframe;
    },
  },
};

module.exports = resolvers;
