counter = 0;
var $boxes = $('.box');
var empty = 0;
var white = -1;
var black = 1;
var size = 8;


var arr = [
  ["0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0"],
  ["0","0","0",-1,1,"0","0","0"],
  ["0","0","0",1,-1,"0","0","0",],
  ["0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0"]
]


// should have used jquery $(.black).length && $(.white).length
var oneCounter = 0;
var minusCounter = 0;
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < 8; j++) {
    if (arr[i][j] === 1) {
      oneCounter++;
    }
    else if (arr[i][j] === -1) {
      minusCounter++;
    }
  }
}
console.log('Number of white pieces: ' + oneCounter, 'Number of black pieces: ' + minusCounter)

function isEmpty($clickedBox) {
  if ($clickedBox.hasClass("black") || $clickedBox.hasClass("white")) {
    return false;
  }
  else {
    return true;
  }
}

$boxes.click(function() {
  var $that = $(this);

  if (isEmpty($(this))) {
console.log('clickable');
    walk ($(this), function(error) {
      if (error) {
        $that.attr('class', 'box') // attr(which attr you'd like to change, what you would like to change it to)
        console.log(err.message); // change this to an alert
      }
    })
  }
})

// $boxes.on('click', function(){
//   var row = $(this).data("row");
//   var column = $(this).data("column");
//   console.log(row, column);
//   var player = (counter%2===0) ? white : black;


  // if (counter % 2 === 0) {
  //   arr[row][column] = white;
  // } else {
  //   arr[row][column] = black;
  // }
  // arr[row][column] = player
  // var piecesChanged = numFlips(row, column, player)
//console.log(arr);

// console.log('flipped: ', piecesChanged);
//   console.log(arr[row][column]);
//   counter++;
// });

/*
Crip walking the board
*/
