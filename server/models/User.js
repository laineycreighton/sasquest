const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [/.+@.+\..+/, 'Email address required!'],
    },
    password: {
        type: String,
        require: true,
        minlength: 8,
    },
    // references the Project schema and has a many projects to one user relationship
    // looks for objectId of Projects
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project',
        },
    ],
});

// checks if input is a new user or updating an existing user and hashes the password with bcrypt for new users
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
// continues to the next function which below
    next();
});

// checks if the provided password matches the stored password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;