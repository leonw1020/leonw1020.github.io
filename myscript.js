// $('#draggableFox').draggable({
//   containment: '#content',
//   stack: ".drag, .drop",
//   cursor: 'move',
//   revert: true
// });
//
// $('#draggableCamel').draggable({
//   containment: '#content',
//   stack: ".drag, .drop",
//   cursor: 'move',
//   revert: true
// });
//
// $('#draggableLizard').draggable({
//   containment: '#content',
//   stack: ".drag, .drop",
//   cursor: 'move',
//   revert: true
// });
//
// $('#draggableBeetle').draggable({
//   containment: '#content',
//   stack: ".drag, .drop",
//   cursor: 'move',
//   revert: true
// });
//
// $('#draggableMeerkat').draggable({
//   containment: '#content',
//   stack: ".drag, .drop",
//   cursor: 'move',
//   revert: true
// });

$("button").click(showMessage);

$("#success").hide();
$("#success").css({
  width: 0,
  height: 0,
});

$('.drag').draggable({
  containment: '#content',
  stack: ".drag, .drop",
  cursor: 'move',
  revert: true
});


$('#droppableFox').droppable({
  drop: handleDropEvent,
  accept: "#draggableFox",
  hoverClass: "hovered"
});

$('#droppableGuanaco').droppable({
  drop: handleDropEvent,
  accept: "#draggableGuanaco",
  hoverClass: "hovered"
});

$('#droppableSloth').droppable({
  drop: handleDropEvent,
  accept: "#draggableSloth",
  hoverClass: "hovered"
});

$('#droppableWalrus').droppable({
  drop: handleDropEvent,
  accept: "#draggableWalrus",
  hoverClass: "hovered"
});

$('#droppableMeerkat').droppable({
  drop: handleDropEvent,
  accept: "#draggableMeerkat",
  hoverClass: "hovered"
});

var animals = 5;
var droppedAnimals = 0;

function handleDropEvent(event, ui){
  ui.draggable.draggable('disable');
  ui.draggable.position({
    of: $(this),
    my: "left top",
    at: "left top"
  });
  ui.draggable.draggable('option', 'revert', false);
  droppedAnimals += 1;
  if(droppedAnimals === animals){
    console.log("Game Over!");
    showMessage();
  }
}

function showMessage(){
  $("#success").show();
  $("#success").animate({
    width: "600px",
    height: "140px",
    bottom: "300px",
    left: "150px",
    opacity: 1
  });
}
