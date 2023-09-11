const { User, Project } = require("../models");

const resolvers = {
  
  Query: {
    //-------Get All Users---------//
    users: async () => {
      // populate projects subdocument when querying for all users
      return User.find({}).populate('projects');
    },
    //-------Get One Users---------//
    users: async (parent, { email }) => {
      // populate projects subdocument when querying for one users
      return User.findOne({ email }).populate('projects');
    },

    Query: {
        //-------Get All Users---------//
        users: async () => {
            return User.find();
        },

        //-------Get A User---------//
        user: async (parent, { email }) => {
            // populate projects subdocument when querying for one user
            return User.findOne({ email }).populate('projects');
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



    //---------------------- MUTATIONS ---------------------//
    Mutation: {

        //----- USERS -----//

        // Create User //
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            // assign json token to new user and log in user
            const token = signToken(user);
            return { token, user };
        },

        // Login User //
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email, password });
            // if no user in database is found with the email, throw auth error
            if (!user) {
                throw new Error('User not found!');
            }
            const correctPw = await User.isCorrectPassword(password);
            // if password is incorrect, throw auth error
            if (!correctPw) {
                throw new Error('Incorrect pasword!');
            }
            // if email and password match, sign the user in with JWT token
            const token = signToken(user);
            return { token, user };
        },

        // Update Password //
        updateUserPassword: async (parent, { currentPassword, newPassword }, { user }) => {
            if (!user) {
                // checks if there is a valid user object, if not (user not logged in) it throws auth error
                throw new AuthenticationError('You must be logged in to update your password');
            }
            // if correctCurrentPassword is false, the provided password doesn't match the current saved password for that user
            const correctCurrentPassword = await user.isCorrectPassword(currentPassword);
            if (!correctCurrentPassword) {
                throw new AuthenticationError('Invalid password');
            };
            // if the current password is correct, it overwrites the old password with the new password 
            user.password = newPassword;
            // saves updated password to the database
            await user.save();
            return user;
        },



        //----- PROJECTS -----//

        // Add Project //
        createProject: async (parent, { projectId, title }) => {
            try {
                const newProject = await Project.create(
                    { _id: projectId },
                    { $addToSet: { projects: { title } } },
                    { new: true, runValidators: true }
                );

                if (!newProject) {
                    throw new Error("Project not found");
                }

                return newProject;
            } catch (error) {
                throw new Error(`Error adding project: ${error.message}`);
            }
        },

        // Update Project //
        updateProject: async (parent, { userId, title }) => {
            try {
                const updatedProject = await Project.findOneAndUpdate(
                    { _id: userId },
                    { $set: { title } },
                    { new: true, runValidators: true }
                );

                if (!updatedProject) {
                    throw new Error("Project not found");
                }

                return updatedProject;
            } catch (error) {
                throw new Error(`Error updating project: ${error.message}`);
            }
        },

        // Delete Project //
        deleteProject: async (parent, { projectId }) => {
            try {
                const deletedProject = await Project.findOneAndDelete({ _id: projectId });

                if (!deletedProject) {
                    throw new Error("Project not found");
                }

                return deletedProject;
            } catch (error) {
                throw new Error(`Error removing project: ${error.message}`);
            }
        },



        //----- INFO -----//

        // Add Info //
        createInfo: async (parent, { projectId, repoURL, deployedURL, description }) => {
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
                    throw new Error("Project not found");
                }

                return updatedProject;
            } catch (error) {
                throw new Error(`Error adding project info: ${error.message}`);
            }
        },

        // Update Info //
        updateInfo: async (parent, { projectId, infoId, updatedInfo }) => {
            try {
                const project = await Project.findById(projectId);

                if (!project) {
                    throw new Error("Project not found");
                }

                const infoToUpdate = project.info.find((info) => info._id == infoId);

                if (!infoToUpdate) {
                    throw new Error("Project info not found");
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

        // Remove Info //
        deleteInfo: async (parent, { projectId, infoId }) => {
            try {
                const updatedProject = await Project.findOneAndUpdate(
                    { _id: projectId },
                    { $pull: { info: { _id: infoId } } },
                    { new: true }
                );

                if (!updatedProject) {
                    throw new Error("Project not found");
                }

                return updatedProject;
            } catch (error) {
                throw new Error(`Error removing project info: ${error.message}`);
            }
        },



        //----- TIMELINE -----//

        // Add Timeline //
        createTimeline: async (parent, args) => {
            try {
                const timeline = await Project.create(args);
                return timeline;
            } catch (error) {
                throw new Error(`Error creating timeline: ${error.message}`);
            }
        },

        // Update Timeline //
        updateTimeline: async (parent, { _id, ...args }) => {
            try {
                const timeline = await Project.findByIdAndUpdate(_id, args, {
                    new: true,
                });
                return timeline;
            } catch (error) {
                throw new Error(`Error updating timeline: ${error.message}`);
            }
        },

        // Remove Timeline //
        deleteTimeline: async (parent, { _id }) => {
            try {
                const timeline = await Project.findByIdAndDelete(_id);
                return timeline;
            } catch (error) {
                throw new Error(`Error deleting timeline: ${error.message}`);
            }
        },



        //----- WIREFRAME -----//

        // Add Wireframe //
        createWireframe: async (parent, args) => {
            try {
                const wireframe = await Project.create(args);
                return wireframe;
            } catch (error) {
                throw new Error(`Error creating wireframe: ${error.message}`);
            }
        },

        // Update Wireframe //
        updateWireframe: async (parent, { _id, ...args }) => {
            try {
                const wireframe = await Project.findByIdAndUpdate(_id, args, {
                    new: true,
                });
                return wireframe;
            } catch (error) {
                throw new Error(`Error updating wireframe: ${error.message}`);
            }
        },

        // Remove Wireframe //
        deleteWireframe: async (parent, { _id }) => {
            try {
                const wireframe = await Project.findByIdAndDelete(_id);
                return wireframe;
            } catch (error) {
                throw new Error(`Error deleting wireframe: ${error.message}`);
            }
        },



    },
};

module.exports = resolvers;