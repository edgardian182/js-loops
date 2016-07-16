// Create a 8x8 grid with one string
//  # # # #
// # # # #
//  # # # #

var board = "";
var size = 8;
for (var y = 0; y < size; y++){
  for (var x = 0; x < size; x++){
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);