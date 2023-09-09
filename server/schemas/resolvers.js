const { User, Project, Info, Timeline, Wireframe } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');

//---------------------------------------- Add your code ----------------------------------------//
const resolvers = {
    Query: {
        users: async () => {
            // populate projects subdocument when querying for all users
            return User.find({}).populate('projects');
        },
        users: async (parent, { email }) => {
            // populate projects subdocument when querying for one users
            return User.findOne({ email }).populate('projects');
        },
        // matchups: async (parent, { _id }) => {
        //     const params = _id ? { _id } : {};
        //     return Matchup.find(params);
        // },
    },
    Mutation: {
        // create user
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            // assign json token to new user and log in user
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email, password });
            // if no user in database is found with the email, throw auth error
            if (!user) {
                throw AuthenticationError;
            }
            const correctPw = await User.isCorrectPassword(password);
            // if password is incorrect, throw auth error
            if (!correctPw) {
                throw AuthenticationError;
            }
            // if email and password match, sign the user in with JWT token
            const token = signToken(user);

            // returns an 'auth' object with the authenticated token and user info
            return { token, user };
        },
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



        // createVote: async (parent, { _id, techNum }) => {
        //     const vote = await Matchup.findOneAndUpdate(
        //         { _id },
        //         { $inc: { [`tech${techNum}_votes`]: 1 } },
        //         { new: true }
        //     );
        //     return vote;
        // },
    },
};

module.exports = resolvers;