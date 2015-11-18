//BASE SETUP
//====================================

// CALL THE PACKAGES -----------------------
var express       = require('express'); //import the express library 
var path          = require('path'); 
var logger        = require('morgan');//used to see request in the console
var bodyParser    = require('body-parser');//import for req.body
var mongoose      = require('mongoose');//for setting a schema in mongo
var bcrypt        = require('bcrypt');//encrypting your passwords
var app           = express();//make an instance of express to use as a bae
var User          = require('./models/user');
//APP CONFIGURATION -----------------------
// user logger to show requests to the console
app.use(logger('dev'));
//use body parser so we can grab information from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//DB CONFIGURATION
mongoose.connect('mongodb://localhost:27017/bcrypt');
//ROUTES CONFIGURATION
//setup root route
//accessed at GET http:/localhost:3000
app.get('/', function(req,res){
  res.send('Welcome to the home page!');
});
// get a instance for the api routes
var apiRouter     = express.Router();
//test route to make sure everything is working
// accessed at GET http://localhost:3000/api
apiRouter.get('/', function(req,res){
  res.json({ message: 'Welcome to the API!'});
});
//add middleware to api routes
apiRouter.use(function(req,res,next){
  // show that it works
  console.log("Someone was here!");
  //add authentication here
 next(); // go to the next route and continue
});
//our routes that end in /users shortcut way
apiRouter.route('/users')
// create a user ( accesed at POST http://localhost:300/api/users)
  .post(function(req, res){
    //create a new instance of the user model
    var user = new User(req.body.user);
    // save the user and check for errors
    user.save(function(err){
    if(err){
      //duplicate entry
     return res.status(401).send({message: err.errmsg});
    }
    else{
      return res.status(200).send({message: 'user created'});
    }
    })
  })
  //get all the users ( accessed at GET http:/localhost:300/api/users)
  .get(function(req, res){
    User.find(function(err, users){
      if(err) return res.status(401).send({message: err.errmsg});
      res.json(users);
    })
  })



//REGISTER OUR ROUTES -------------
//all of our routes using apiRouter will be prefixed with /api
app.use('/api', apiRouter);




//START THE SERVER
//================================

app.listen(3000);
