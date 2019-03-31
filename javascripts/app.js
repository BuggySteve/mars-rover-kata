var grid = [
  ["R", null, null, "X", null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travellog: []
}

var roverPosition = [null, null];

function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      rover.y -= 1;
      break;
    case "S":
      rover.y += 1;
      break;
    case "W":
      rover.x -= 1;
      break;
    case "E":
      rover.x += 1;
      break;
  }
  if (rover.x > 9){
    rover.x = 9;
  }
  if (rover.y > 9){
    rover.y = 9;
  }
  if (rover.x < 0){
    rover.x = 0;
  }
  if (rover.y < 0){
    rover.y = 0;
  }
  rover.travellog.push( "(" + rover.x + "," + rover.y + ")" );
  roverPosition[0] = rover.x;
  roverPosition[1] = rover.y;
}

function moveBackward(rover){
  switch (rover.direction) {
    case "N":
      rover.y += 1;
      break;
    case "S":
      rover.y -= 1;
      break;
    case "W":
      rover.x += 1;
      break;
    case "E":
      rover.x -= 1;
      break;
  }
  if (rover.x > 9){
    rover.x = 9;
  }
  if (rover.y > 9){
    rover.y = 9;
  }
  if (rover.x < 0){
    rover.x = 0;
  }
  if (rover.y < 0){
    rover.y = 0;
  }
  rover.travellog.push( "(" + rover.x + "," + rover.y + ")" );
  roverPosition[0] = rover.x;
  roverPosition[1] = rover.y;
}

var listOfCommands  = "";

function moveRover(listOfCommands){
  for (var i = 0; i < listOfCommands.length; i++){
    var singleCommand = listOfCommands[i];
    switch (singleCommand){
      case "l":
        turnLeft(rover)
        break;
      case "r":
        turnRight(rover)
        break;
      case "f":
        moveForward(rover)
        break;
      case "b":
        moveBackward(rover)
        break;
      default:
        console.log("Invalid command (Must be 'l', 'r', 'f' or 'b')! Wall-E cannot move :(")
    }
  }
  console.log("Travellog: " + rover.travellog);
  console.log("Current position: " + roverPosition);
  console.log("Wall-E is now facing " + rover.direction);
  console.log("Wall-E is ready for your command!");
}
