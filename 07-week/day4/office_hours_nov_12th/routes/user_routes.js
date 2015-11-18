var usersController = require('../controllers/users_controller.js')
var express					= require('express')
var	userRoutes			= express.Router()

//create routes for /users
userRoutes.route('/')
	.get(usersController.index)
	.post(usersController.create)
	//add routes for the root route /users
userRoutes.route('/:user_name')
	.get(usersController.show)
//create routes for /users/:email
userRoutes.route('/:email')
	// .patch(usersController.update)
	.delete(usersController.destroy)
	//add routes for the route /users/:email

module.exports = userRoutes
