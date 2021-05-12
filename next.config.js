const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    MONGO_URI: process.env.MONGO_URI
  }
}
