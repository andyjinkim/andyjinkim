var http = require('http');
var fs = require('fs');

// fs.readFile('poem.txt', function(err, data){
//   if (err) throw err;
//   console.log(data.toString());
// });

var myServer = http.createServer(function(request, response){
  console.log('somebody made a request at: ', request.url);
  fs.readFile('poem.txt', function(err, data) {
    if (err) throw err;
    response.end(data.toString());
  });
});

myServer.listen(8008);
