//user routes
var express     = require('express')
var passport    = require('passport')
var userRouter  = express.Router()

userRouter.route('/login')
  .get(function(req,res){
    res.render('login', {message:req.flash('loginMessage')})
  })
.post(/* create session with passport */)

userRouter.route('/signup')
  .get(function(req,res){
    res.render('signup', {message:req.flash('signUpMessage')})
  })
  .post(/* create account with passport */)

// isLoggedIn is acting like middleware, which is being run before the response is sent
userRouter.get('/profile', isLoggedIn, function(req,res){
  // render user profile based on who is logged in. if not logged in, kick back to another route
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next()
  res.redirect('/')
}

module.exports = userRouter
