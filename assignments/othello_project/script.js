counter = 0;
var $boxes = $('.box');
var boxes = document.querySelectorAll('.box');
var row = parseInt($(this).data('row'));
var column = parseInt($(this).data('col'));
var diagonal = parseInt($(this).data('diag'));
var otherDiagonal = parseInt($(this).data('otherdiag'));
var $entireRow = $('.box[data-row="' + row + '"]');
var $entireColumn = $( ".box[data-col='" + column + "']" );
var $entireDiagonal = $(".box[data-diag='" + diagonal + "']");
var $otherDiagonal = $(".box[data-otherdiag='" + otherDiagonal + "']");

// function upVertical() {
//   $entireColumn.each(function() {
//     if ($(this).hasClass('white')
//   }
// }
//
// function downVertical() {
//
// }
//
// function rightHorizontal() {
//
// }
//
// function leftHorizontal() {
//
// }
//
// function topRight() {
//
// }
//
// function bottomRight() {
//
// }
//
// function bottomLeft() {
//
// }
//
// function topLeft() {
//
// }


$boxes.on('click', function(){
    counter = counter + 1;
    console.log('counter', counter); {

      var row = parseInt($(this).data('row'));
      var column = parseInt($(this).data('col'));
      var diagonal = parseInt($(this).data('diag'))
      var otherDiagonal = parseInt($(this).data('otherdiag'))
      var $entireRow = $('.box[data-row="' + row + '"]')
      var $entireColumn = $( ".box[data-col='" + column + "']" )
      var $entireDiagonal = $(".box[data-diag='" + diagonal + "']")
      var $otherDiagonal = $(".box[data-otherdiag='" + otherDiagonal + "']")

      function checkBoxes() {
        if (counter % 2 === 0) {
          (this).className = "box black";
          $entireRow.each(function() {
            if ($(this).not(document.getElementsByClassName('black'))) {
              $(this).removeClass('white').addClass('black');
          };
        });
          $entireColumn.each(function() {
            if ($(this).not(document.getElementsByClassName('black'))) {
              $(this).removeClass('white').addClass('black');
            };
          });
          $entireDiagonal.each(function() {
            if ($(this).not(document.getElementsByClassName('black'))) {
              $(this).removeClass('white').addClass('black');
            };
          });
          $otherDiagonal.each(function() {
            if ($(this).not(document.getElementsByClassName('black'))) {
              $(this).removeClass('white').addClass('black');
            };
          });
      }
      else if (counter % 2 === 1) {
        (this).className = "box white";
          $entireRow.each(function() {
            if ($(this).not(document.getElementsByClassName('white'))) {
              $(this).removeClass('black').addClass('white');
            };
          });
          $entireColumn.each(function() {
            if ($(this).not(document.getElementsByClassName('white'))) {
              $(this).removeClass('black').addClass('white');
            };
          });
          $entireDiagonal.each(function() {
            if ($(this).not(document.getElementsByClassName('white'))) {
              $(this).removeClass('black').addClass('white');
            };
          });
          $otherDiagonal.each(function() {
            if ($(this).not(document.getElementsByClassName('white'))) {
              $(this).removeClass('black').addClass('white');
            }
          })
    }
    }
    checkBoxes();
    }

    console.log('Row: ', row);
    console.log('Column: ', column);
    console.log('Diagonal: ', diagonal);
    console.log('All divs in same row: ', $('.box[data-row="' + row + '"]'))
    console.log('All divs in same column: ', $( ".box[data-col='" + column + "']" ))
    console.log('All divs in the negative diagonal: ', $(".box[data-diag='" + diagonal + "']"))
    console.log('All divs in the positive diagonal: ', $(".box[data-otherdiag='" + otherDiagonal + "']"))
  })



//hint: jquery hasClass()



// for (i=0; i<boxes.length; i++) {
//   console.log('for loop function firing');
//   if ((this).className === "box black" && boxes[i+4].className === "box white" && boxes[i+8].className === "box black") {
//     boxes[i+4].toggleClass("box black");
// }
// }
