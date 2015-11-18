var	express 			= require('express')
var	app 					= express()
var	ejs 					= require('ejs')
var	ejsLayouts 		= require('express-ejs-layouts')
var	mongoose 			= require('mongoose')
var	flash 				= require('connect-flash')
var	logger 				= require('morgan')
var	cookieParser 	= require('cookie-parser')
var	bodyParser 		= require('body-parser')
var	session 			= require('express-session')
var	passport 			= require('passport')

// environment port
var port = process.env.PORT || 3000

// user routes
var userRoutes = require('./routes/users.js')

// mongoose connection
mongoose.connect('mongodb://localhost/passport-authentication', function(err){
	if(err) return console.log('Cannot connect :(')
	console.log('Connected to MongoDB. Sweet!')
})

// middleware
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// ejs configuration
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//root route
app.get('/', function(req,res){
	res.render('index')
})

app.use('/', userRoutes)

app.listen(port, function(){
	console.log("Server running on port", port)
})
