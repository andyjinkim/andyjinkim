// if you are going to use an npm package, you must 'npm install request --save' in terminal before running server

var requestModule = require('request')
var express = require('express')
var app  = express()
var myImage = null

app.get('/', function(req,res){
    res.send('<img src="' + myImage + '">')
  })

requestModule('http://www.reddit.com/r/funny.json', function(err, response, body){
  if (err) throw err
  // let's convert JSON to a javascript object
  var myResult = JSON.parse(body)
  // prints html for url in console
  console.log("Score = " + myResult.data.children[1].data.score)
  console.log("Number of comments = " + myResult.data.children[1].data.num_comments)
  myImage = myResult.data.children[1].data.thumbnail
})

app.listen(8000, function(){
  console.log("Server running on port 8000")
})
