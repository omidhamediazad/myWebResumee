const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  link: { type: String }
});

module.exports = mongoose.model('Project', ProjectSchema);
