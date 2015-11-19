var passport          = require('passport')
// a subpackage of passport that allows for a specific type of strategy
var LocalStrategy     = require('passport-local')
var User              = require('../models/User.js')

// built into passport. converts user object into something that we can turn into a cookie
passport.serializeUser(function(user, done){
  done(null, user.id)
})

// extracts user information from cookie
passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err, user)
  })
})

// method for creating a new user locally
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done){
  // does a user already exist with this email?
  User.findOne({'local.email': email}, function(err,user){
    if(err) return done(err)
    if(user) return done(null, false, req.flash('signUpMessage','That email is already taken!'))
// new user creation
    var newUser = new User()
    // storing information about user in an object called local
    newUser.local.name      = req.body.name
    newUser.local.email     = email
    newUser.local.password  = newUser.generateHash(password)

    newUser.save(function(err){
      if(err) throw err
      return done(null, newUser)
    })
  })
}))

// method for logging in locally
passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done){
// does a user exist with a particular email
    User.findOne({'local.email':email}, function(err,user){
      if(err) throw err
      if(!user) return done(null, false, req.flash('loginMessage', 'No user found.'))
      // if user is unable to type in the correct password
      if(!user.validPassword(password)) return done(null, false, req.flash('loginMessage', 'Invalid credentials!'))
      return done(null, user)
    })
}))

module.exports = passport
