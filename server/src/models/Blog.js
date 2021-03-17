const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 3
  },
  content: {
    type: String,
  }
})

module.exports = mongoose.model('Blog', BlogSchema)