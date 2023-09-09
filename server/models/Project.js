const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  title: {
    type: String,
    required: 'Please give your project a title!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  info: [
    {
      repoURL: {
        type: String,
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
      deployedURL: {
        type: String,
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
      description: {
        type: String,
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
    },
  ],
  timelines: [
    {
      date: {
        type: Date,
        required: true,
      },
      goal: {
        type: String,
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
    },
  ],
  wireframes: [
    {
      title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      imageURL: {
        type: String,
        minlength: 1,
        maxlength: 280,
      },
      note: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
    },
  ],
});

const Project = model('Project', projectSchema);

module.exports = Project;
