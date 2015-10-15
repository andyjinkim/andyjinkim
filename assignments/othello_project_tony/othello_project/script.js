// loop through empty boxes to determine if there are any valid moves available
// make sure that you don't use current functions because they will flip pieces

counter = 0;
var $boxes = $('.box');
var empty = 0;
var white = -1;
var black = 1;
var size = 8;
var $scoreboard = $('.scoreboard')
var oneCounter = 0;
var minusCounter = 0;

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

function isEmpty($clickedBox) {
  if ($clickedBox.hasClass("black") || $clickedBox.hasClass("white")) {
    return false;
  }
  else {
    return true;
  }
}

function getElements($start, direction, color){
  var row = $start.data('row');
  var column = $start.data('column');
  var id;
  var elements =[];
console.log('row:', row, 'column:', column);
  switch (direction){
    case 'up':
      row--;
      id = row * size + column;
      while (row>=0 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break; //breaks while loop
        }
        row--;
        id = row * size + column;
      }
      break; //break case
    case 'up-right':
      row--; column++;
      id = row * size + column;
      while (row>=0 && column<8 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
        row --; column++;
        id = row * size + column;
      }
      break;
    case 'right':
      column++;
      id = row * size + column;
      while (column<8 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
        column++;
        id = row * size + column;
      }
      break;
    case 'down-right':
      row++; column++;
      id = row * size + column;
      while (row<8 && column<8  && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
        row++; column++;
        id = row * size + column;
      }
      break;
    case 'down':
      row++;
      id = row * size + column;
      while (row<8 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
        row++;
        id = row * size + column;
      }
      break;
    case 'down-left':
      row++; column--;
      id = row * size + column;
      while (row<8 && column>=0 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
        row++; column--;
        id = row * size + column;
      }
      break;
    case 'left':
      column--;
      id = row * size + column;
      while (row>=0 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
        column--;
        id = row * size + column;
      }
      break;
    case 'up-left':
      row--; column--;
      id = row * size + column;
      while (row>=0 && column>=0 && !(isEmpty($('#'+id)))){
        elements.push($('#'+id));
        if ($('#'+id).hasClass(color)) {
          break;
        }
        row--; column--;
        id = row * size + column;
      }
    default:
      break;//if a case doesn't match any of the cases, then break.
  }
  console.log('elements:', elements);
  return elements;
}

function checkLine(elements, color){
  if (elements.length <2){ //either there is an empty space or the immediate next is the same color
    return 0;
  } else if (elements[elements.length-1].hasClass(color)){
      elements.forEach(function($el){
        $el.attr('class', 'box').addClass(color);
      })
      return 1;
  } else {
    return 0;
  }
}

function walk($start, callback) { //ask bensen about this callback later
  if (counter%2 === 0) {
    $start.addClass("black");
  }
  else {
    $start.addClass("white");
  }
  var color = $start.hasClass('white') ? 'white' : 'black'; //shortened if/else statement
  var directions = ['up', 'up-right', 'right', 'down-right', 'down', 'down-left', 'left', 'up-left']

  //var moveResults = [];
  var validMove = 0;
  for (var i = 0; i < directions.length; i++) {
    //loop through the directions
    var elements = getElements($start, directions[i], color);
    validMove += checkLine(elements, color);
  }

  return validMove;
}

$boxes.click(function() {
  var $that = $(this);

  if (isEmpty($(this))) {
    var validMove = walk($(this)); //walk() returns true/false
    console.log(this)

    if (validMove > 0){
      counter++;
      printScore();
    } else {
      $that.attr('class', 'box') // attr(which attr you'd like to change, what you would like to change it to)
      console.log('invalid move'); // change this to an alert
    }
  }
})

// should have used jquery $(.black).length && $(.white).length
function printScore() {
  $scoreboard.text('Number of white pieces: ' + $('.white').length + ' Number of black pieces: ' + $('.black').length)};
printScore();
