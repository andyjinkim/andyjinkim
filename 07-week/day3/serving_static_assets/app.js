var express       = require('express')
var app           = express()

app.use(express.static('public')) // public - name of folder

app.listen(1337)
