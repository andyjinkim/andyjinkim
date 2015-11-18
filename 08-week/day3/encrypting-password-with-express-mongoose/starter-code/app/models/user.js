var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
  name: { type: String }
 ,email: { type: String, required: true, unique: true }
 ,password: { type: String, required: true, select: false}
})

//has the password before the user is saved
userSchema.pre('save', function(next){
  var user = this
  //hash the password only if the password has been changed or user is new
  if(!user.isModified('password')) return next()
   
  //generate the salt
  //the first arguments corresponds to the number of salting to be done
  bcrypt.genSalt(5, function(err, salt){
  //now we use the salt generated
  bcrypt.hash(user.password, salt, function(err, hash){
    if(err) return next(err)

     //change the password to the hashed version
     user.password = hash;
     next(); 
  })
  })
})

//method to compare a given password with the database hash
userSchema.methods.authenticate = function(password){
  var user = this

  return bcrypt.compareSync(password, user.password)
}
//return the model
module.exports = mongoose.model('User', userSchema)
