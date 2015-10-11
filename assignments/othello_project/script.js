counter = 0;
var $boxes = $('.box');

function placePiece(el) {
  console.log('testing');
  $boxes.on('click', function(){
      console.log('counter', counter);
      if ((this).className === "box") {
        if (counter % 2 === 0) {
          (this).className = "black";
          (this).innerHTML = ""
        } else {
          (this).className = "white";
          (this).innerHTML = ""
        }
        console.log($boxes);
        counter = counter + 1;
      }
    })
  }

placePiece();
