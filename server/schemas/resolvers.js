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
      try {
        const projects = await Project.find({});
        return projects;
      } catch (error) {
        throw new Error(`Error getting projects: ${error.message}`);
      }
    },

    //----- Get One Project -----//
    project: async (parent, { projectId }) => {
      try {
        const project = await Project.findOne({ _id: projectId });
        if (!project) {
          throw new Error(`Project not found`);
        }
        return project;
      } catch (error) {
        throw new Error(`Error getting project: ${error.message}`);
      }
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
      try {
        const updatedProject = await Project.findOneAndUpdate(
          { _id: projectId },
          {
            $addToSet: { info: { repoURL, deployedURL, description } },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        if (!updatedProject) {
          throw new Error('Project not found');
        }

        return updatedProject;
      } catch (error) {
        throw new Error(`Error adding project info: ${error.message}`);
      }
    },

    //----- Update Project Info -----//
    updateInfo: async (parent, { projectId, infoId, updatedInfo }) => {
      try {
        const project = await Project.findById(projectId);

        if (!project) {
          throw new Error('Project not found');
        }

        const infoToUpdate = project.info.find((info) => info._id == infoId);

        if (!infoToUpdate) {
          throw new Error('Project info not found');
        }

        if (updatedInfo.repoURL !== undefined) {
          infoToUpdate.repoURL = updatedInfo.repoURL;
        }
        if (updatedInfo.deployedURL !== undefined) {
          infoToUpdate.deployedURL = updatedInfo.deployedURL;
        }
        if (updatedInfo.description !== undefined) {
          infoToUpdate.description = updatedInfo.description;
        }

        await project.save();

        return project;
      } catch (error) {
        throw new Error(`Error updating project info: ${error.message}`);
      }
    },
  },

    //----- Remove Project Info -----//
    removeInfo: async (parent, { projectId, infoId }) => {
      try {
        const updatedProject = await Project.findOneAndUpdate(
          { _id: projectId },
          { $pull: { info: { _id: infoId } } },
          { new: true }
        );

        if (!updatedProject) {
          throw new Error('Project not found');
        }

        return updatedProject;
      } catch (error) {
        throw new Error(`Error removing project info: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
