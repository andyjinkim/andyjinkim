counter = 0;
var $boxes = $('.box');
var boxes = document.querySelectorAll('.box');
var $columns = $('.column1')

function placePiece() {
  $boxes.on('click', function(){
      console.log('counter', counter);
      if ((this).className === "box") {
        if (counter % 2 === 0) {
          (this).className = "box black";

          var row = parseInt($(this).data('row'));
          var column = parseInt($(this).data('col'));
          var $entireRow = $('.box[data-row="' + row + '"]')

          function checkBoxes() {
            $entireRow.each(function() {
              if ($(this).not(document.getElementsByClassName('black'))) {
                $(this).removeClass('white').addClass('black');
              }
              console.log($(this).hasClass('white'));
            })
          }

        } else {
          (this).className = "box white";

          // function checkWhite() {
          //   $entireRow.each(function() {
          //     if ($(this).not(document.getElementsByClassName('white'))) {
          //       $(this).removeClass('black').addClass('white')
          //     }
          //   })
          // }

        }
        counter = counter + 1;
        // console.log(counter);
      }



    // function checkBoxes() {
    //   if (($('.box[data-row="' + row '"]')).hasClass("white") {
    //     toggleClass("box black")
    //   })
    // }

    console.log('Row: ', row);
    console.log('Column: ', column);
    console.log('All divs in same row: ', $('.box[data-row="' + row + '"]'))
    //console.log('All divs in same row: ', $('.box.row'+row));
    console.log('All divs in same column: ', $( ".box[data-col='" + column + "']" ))
    // console.log($('.box[data-row="' + (row - 1) + '"][data-col="' + (column + 1) + '"]'))

    checkBoxes();
  })
}

placePiece();

//hint: jquery hasClass()



// for (i=0; i<boxes.length; i++) {
//   console.log('for loop function firing');
//   if ((this).className === "box black" && boxes[i+4].className === "box white" && boxes[i+8].className === "box black") {
//     boxes[i+4].toggleClass("box black");
// }
// }
