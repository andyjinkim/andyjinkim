var express       = require('express')
var app           = express()
var logger        = require('morgan')
var bodyParser    = require('body-parser')
var mongoose      = require('mongoose')
var port          = process.env.PORT || 3000

// let us connect to mongo
mongoose.connect('mongodb://localhost/top_movies')

// creating the model schema
var movieSchema = new mongoose.Schema({
  title: String,
  name: String,
  year: Number,
  rating: Number,
  views: Number,
  running_time: String,
  genres: String
})
// defining the movie model
var Movies = mongoose.model('Movie', movieSchema)

// logs requests made to the app
app.use(logger('dev'))

// set the public folder as the static assets serving folder
app.use(express.static('public'))

app.get('/', function(req,res){
  res.send('hello')
})

app.get('/movies', function(req,res){
  Movies.find
  .limit(10)({}, function(err,movies){
    res.json(movies)
  }
)})

app.get('/movies/:id', function(req,res){
  Movies.findById(req.params.id, function(err,movie){
    res.json(movie)
    })
})

app.listen(port, function(){
  console.log("server started on port " + port)
})
