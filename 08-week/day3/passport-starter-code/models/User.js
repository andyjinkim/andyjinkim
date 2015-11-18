//user model
var mongoose  = require('mongoose')
var bcrypt    = require('bcrypt-nodejs')
var Schema    = mongoose.Schema

var userSchema = new Schema({
// local/facebook = strategies for logging in
  local: {
    name: String,
    email: String,
    password: String
  },
  facebook: {
    id: String,
    name: String,
    token: String,
    email: String
  }
})

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function(password){
  var user = this
  return bcrypt.compareSync(password, user.local.password)
}

var User = mongoose.model('User', userSchema)

module.exports = User
