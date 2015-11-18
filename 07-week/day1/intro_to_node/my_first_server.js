// Let's use the http module
var http = require('http');
var fs = require('fs');
var theFileContents = null;

fs.readFile('poem.txt', function(err, data){
  if (err) throw err;
  theFileContents = data.toString();
});

// this sets up the server, how it is going to run
var myServer = http.createServer(function(request, response){
  console.log('somebody made a request at: ', request.url);

  response.write(theFileContents);
  response.end();
});

// 1337 is the port, this starts the server
myServer.listen(1337);
