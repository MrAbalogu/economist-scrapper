const mongoose         = require('mongoose'),
      Schema           = mongoose.Schema,
      bcrypt           = require('bcryptjs'),
      SALT_WORK_FACTOR = 10

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add your Full Name']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide an email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password']
  }
})

UserSchema.pre('save', function(next) {
  let user = this

  if (!user.isModified('password')) return next()

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = (userPassword, cb) => {
  console.log('this user', this)
  bcrypt.compare(userPassword, this.password, function(err, isMatch) {
      if (err) return cb(err)
      cb(null, isMatch)
  })
}

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
