const mongoose         = require('mongoose'),
      Schema           = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'A Title must exist']
  },
  section: {
    type: String,
  },
  url: {
    type: String,
    unique: true
  }
})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema)
