//user routes
var express     = require('express')
var passport    = require('passport')
var userRouter  = express.Router()

userRouter.route('/login')
  .get(function(req,res){
    res.render('login', {message:req.flash('loginMessage')})
  })
.post(passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}))

userRouter.route('/signup')
  .get(function(req,res){
    res.render('signup', {message:req.flash('signUpMessage')})
  })
  .post(passport.authenticate('local-signup', {
    // successRedirect, etc are built in keys for the authenticate method in passport
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }))

// isLoggedIn is acting like middleware, which is being run before the response is sent
userRouter.get('/profile', isLoggedIn, function(req,res){
  // render user profile based on who is logged in. if not logged in, kick back to another route
  res.render('profile', {user: req.user})
})

userRouter.get('/logout', function(req,res){
// the logout method of req is built in to passport
  req.logout()
  res.redirect('/')
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next()
  res.redirect('/')
}

module.exports = userRouter
