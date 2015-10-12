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
        } else {
          (this).className = "box white";
        }
        // counter = counter + 1;
        // console.log(counter);
      }
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
