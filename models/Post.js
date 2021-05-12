const mongoose         = require('mongoose'),
      Schema           = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
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

PostSchema.pre('save', (next) => {
  let post = this
  
})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema)
