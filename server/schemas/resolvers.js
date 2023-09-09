const { User, Project } = require("../models");

const resolvers = {
  Query: {
    wireframe: async () => {
      return Wireframe.find({});
    },
    wireframeId: async (parent, { _id }) => {
      return Wireframe.findById({ _id });
    },

    //----- Get All Projects -----//
    projects: async () => {
      return Project.find({});
    },

    //----- Get One Project -----//
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
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

    //----- Add Project Info -----//
    addInfo: async (parent, { projectId, repoURL, deployedURL, description }) => {
      return Project.findOneAndUpdate(
        { _id: projectId },
        {
          $addToSet: { info: { repoURL, deployedURL, description } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    //----- Remove Project Info -----//
    removeInfo: async (parent, { projectId, repoURL, deployedURL, description }) => {
      return Project.findOneAndUpdate(
        { _id: infoId },
        { $pull: { info: { _id: infoId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
