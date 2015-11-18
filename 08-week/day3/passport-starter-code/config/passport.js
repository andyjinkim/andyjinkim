var passport          = require('passport')
var LocalStrategy     = require('passport-local')
var User              = require('../models/User.js')

passport.serializeUser(function(user, done){
  done(null, user.id)
})

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
    User.findOne({'local.email':email}, function(err,user){
      if(err) throw err
      
    })
}))
