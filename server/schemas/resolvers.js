const { User, Project, Timeline } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("projects");

        return userData;
      }
      throw AuthenticationError;
    },

    //----- Get All Projects -----//
    projects: async (parent, args, context) => {
      if (context.user) {
        const projects = await Project.find({});
        return projects;
      }
      throw AuthenticationError;
    },

    //----- Get One Project -----//
    project: async (parent, { projectId }, context) => {
      if (context.user) {
        const project = await Project.findOne({ _id: projectId })
          .populate("timelines")
          .populate("wireframes");

        if (!project) {
          throw console.log("No project found with this id!");
        }
        return project;
      }
      throw AuthenticationError;
    },

    // Get All Timelines
    timelines: async (parent, args, context) => {
      if (context.user) {
        const timeline = await Project.find();
        if (!timeline) {
          throw console.log("No timeline found with this id!");
        }
        return timeline;
      }
      throw AuthenticationError;
    },
  },

  //---------------------- MUTATIONS ---------------------//
  Mutation: {
    //----- USERS -----//

    // Create User //
    addUser: async (parent, { firstName, lastName, email, password }) => {
      try {
        console.log("adduser");
        const user = await User.create({
          firstName,
          lastName,
          email,
          password,
        });
        // assign json token to new user and log in user
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.log(error);
      }
    },

    // Login User //
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // if no user in database is found with the email, throw auth error
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      // if password is incorrect, throw auth error
      if (!correctPw) {
        throw AuthenticationError;
      }
      // if email and password match, sign the user in with JWT token
      const token = signToken(user);
      return { token, user };
    },

    // Update Password //
    updateUserPassword: async (
      parent,
      { email, currentPassword, newPassword }
    ) => {
      const user = await User.findOne({ email });
      if (user) {
        // checks if there is a valid user object, if not (user not logged in) it throws auth error
        // if correctCurrentPassword is false, the provided password doesn't match the current saved password for that user
        const correctCurrentPassword = await user.isCorrectPassword(
          currentPassword
        );
        if (!user) {
          console.log("User not found");
        }
        // checks if there is a valid user object, if not (user not logged in) it throws auth error
        // if updatePassword is false, the provided password doesn't match the current saved password for that user
        // const updatePassword = await user.isCorrectPassword(currentPassword);
        // if (!updatePassword) {
        //   console.log("Invalid password");
        // }
        // if the current password is correct, it overwrites the old password with the new password
        user.password = newPassword;
        // saves updated password to the database
        // await user.save();
        return user;
      }
      throw AuthenticationError;
    },

    //----- PROJECTS -----//

    // Add Project //
    createProject: async (parent, args, context) => {
      if (context.user) {
        const newProject = await Project.create(args);
        // console.log(newProject);

        if (!newProject) {
          console.log("Project not found");
        }

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { projects: newProject._id } },
          { new: true }
        );

        return updatedUser;
      }
      throw AuthenticationError;
    },

    // Update Project //
    updateProject: async (parent, { title }, context) => {
      if (context.user) {
        const updatedProject = await Project.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { title } },
          { new: true, runValidators: true }
        );

        if (!updatedProject) {
          console.log("Project not found");
        }

        return updatedProject;
      }
      throw AuthenticationError;
    },

    // Delete Project //
    deleteProject: async (parent, { projectId }, context) => {
      if (context.user) {
        const deletedProject = await Project.findOneAndDelete({
          _id: projectId,
        });

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: { projectId } } },
          { new: true }
        );

        // if (!deletedProject) {
        //   console.log("Project not found");
        // }

        return updatedUser;
      }
      throw AuthenticationError;
    },

    //----- INFO -----//

    // Add Info //
    // createInfo: async (
    //   parent,
    //   { projectId, repoURL, deployedURL, description },
    //   context
    // ) => {
    //  if
    //     const updatedProject = await Project.findOneAndUpdate(
    //       { _id: projectId },
    //       {
    //         $addToSet: { info: { repoURL, deployedURL, description } },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );

    //     if (!updatedProject) {
    //       throw AuthenticationError;
    //     }

    //     return updatedProject;
    //   } catch (error) {
    //     throw AuthenticationError;
    //   }
    // },

    // Update Info //
    // updateInfo: async (parent, { projectId, infoId, updatedInfo }) => {
    //   try {
    //     const project = await Project.findById(projectId);

    //     if (!project) {
    //       throw AuthenticationError;
    //     }

    //     const infoToUpdate = project.info.find((info) => info._id == infoId);

    //     if (!infoToUpdate) {
    //       throw AuthenticationError;
    //     }

    //     if (updatedInfo.repoURL !== undefined) {
    //       infoToUpdate.repoURL = updatedInfo.repoURL;
    //     }
    //     if (updatedInfo.deployedURL !== undefined) {
    //       infoToUpdate.deployedURL = updatedInfo.deployedURL;
    //     }
    //     if (updatedInfo.description !== undefined) {
    //       infoToUpdate.description = updatedInfo.description;
    //     }

    //     await project.save();

    //     return project;
    //   } catch (error) {
    //     throw AuthenticationError;
    //   }
    // },

    // Remove Info //
    // deleteInfo: async (parent, { projectId, infoId }) => {
    //   try {
    //     const updatedProject = await Project.findOneAndUpdate(
    //       { _id: projectId },
    //       { $pull: { info: { _id: infoId } } },
    //       { new: true }
    //     );

    //     if (!updatedProject) {
    //       throw AuthenticationError;
    //     }

    //     return updatedProject;
    //   } catch (error) {
    //     throw AuthenticationError;
    //   }
    // },

    //----- TIMELINE -----//

    // Add Timeline //
    createTimeline: async (parent, args, context) => {
      if (context.user) {
        console.log(args.date)
        console.log(args.goal)
        console.log(args.projectId)
        const newTimeline = await Timeline.create({date: args.date, goal: args.goal})
        const timeline = await Project.findByIdAndUpdate(
          { _id: args.projectId },
          {$addToSet: { timelines: newTimeline._id }},
          { new: true, runValidators: true }
        );
        return timeline;
      }
      throw AuthenticationError;
    },

    // Update Timeline //
    updateTimeline: async (parent, { timelineId, date, goal }) => {
      try {
        const timeline = await Timeline.findByIdAndUpdate({_id:timelineId}, {date, goal}, {
          new: true,
        });
        return timeline;
      } catch (error) {
        throw AuthenticationError(`Error updating timeline: ${error.message}`);
      }
    },

    // Remove Timeline //
    deleteTimeline: async (parent, { projectId, timelineId }, context) => {
      if (context.user) {
        const deleteTimeline = await Timeline.findByIdAndRemove(
          {_id: timelineId}
        );
        const timeline = await Project.findOneAndUpdate(
          { _id: projectId },
          { $pull: { timelines: { _id: timelineId } } },
          { new: true, runValidators: true }
        );
        return timeline;
      }
      throw AuthenticationError;
    },

    //----- WIREFRAME -----//

    // Add Wireframe //
    createWireframe: async (parent, args, context) => {
      if (context.user) {
        const wireframe = await Project.findByIdAndUpdate(
          { _id: args.projectId },
          { $push: { wireframes: args } },
          { new: true, runValidators: true }
        );
        return wireframe;
      }
      throw AuthenticationError;
    },

    // Update Wireframe //
    // updateWireframe: async (parent, { _id, ...args }) => {
    //   try {
    //     const wireframe = await Project.findByIdAndUpdate(_id, args, {
    //       new: true,
    //     });
    //     return wireframe;
    //   } catch (error) {
    //     throw AuthenticationError(`Error updating wireframe: ${error.message}`);
    //   }
    // },

    // Remove Wireframe //
    deleteWireframe: async (parent, { projectId, wireFrameId }, context) => {
      if (context.user) {
        const timeline = await Project.findByIdAndUpdate(
          { _id: projectId },
          { $pull: { wireframes: { wireFrameId } } },
          { new: true, runValidators: true }
        );
        return timeline;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;