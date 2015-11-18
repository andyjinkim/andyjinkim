var fs = require('fs'); // fs stands for file system

fs.readFile('poem.txt', function(err, data) { // printed third
  if (err) throw err; // will provide error code when run without valid file path
  console.log(data.toString());
});

console.log('who goes first?'.toUpperCase()); // printed first

var myResult = 5 + 10; // printed second
console.log(myResult);
