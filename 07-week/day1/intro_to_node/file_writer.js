var fs = require('fs');

fs.writeFile('poem.txt', 'hello there', function(err){
  if (err) throw err;
  console.log('it worked!');
});

console.log('let us see what happens..');
