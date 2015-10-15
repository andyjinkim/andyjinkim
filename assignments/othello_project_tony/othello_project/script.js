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

function getElements($start, direction, color){
  var row = parseInt($start.data('row'))
  var column = parseInt(start.data('column'))
  var elements =[];

  switch (direction){
    case 'up':
      row--;
      var id = row * size + column - 1;
      while (row>=0 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
      }
    case 'up-right':
      row--, column++;
      while (row>=0 && column<8 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
      }
    case 'right':
      row++;
      while (row<8 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
      }
    case 'down-right':
      row++, column++;
      while (row<8 && column<8  && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
      }
    case 'down':
      row++;
      while (row<8 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
      }
    case 'down-left':
      row++, column--;
      while (row<8 && column>=0 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
      }
    case 'left':
      row--;
      while (row>=0 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
      }
    case 'up-left':
      row--, column--;
      while (row>=0 && column>=0 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
      }
    default:
      break;//if a case doesn't match any of the cases, then break.
  }
  return validMove;
}

function checkLine(elements){

}

function walk($start, callback) { //ask bensen about this callback later
  if (counter%2 === 0) {
    $start.addClass("black");
  }
  else {
    $start.addClass("white");
  }
  var color = $start.hasClass('white') ? 'white' : 'black'; //shortened if/else statement
  var directions = ['up']

  var moveResults = [];
  var validMove = 0;
  for (var i = 0; i < directions.length; i++) {
    //loop through the directions
    var elements = getElements($start, directions[i], color);
    validMove += checkLine(elements);
  }

  return validMove;
}

$boxes.click(function() {
  var $that = $(this);

  if (isEmpty($(this))) {
    console.log('clickable');
    var validMove = walk($(this)); //walk() returns true/false

    if (validMove){
      counter++;
    } else {
      $that.attr('class', 'box') // attr(which attr you'd like to change, what you would like to change it to)
      console.log('invalid move'); // change this to an alert
    }
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
