var thePlan =
  ["############################",
   "#      #    #      o      ##",
   "#                          #",
   "#          #####           #",
   "##         #   #    ##     #",
   "###           ##     #     #",
   "#           ###      #     #",
   "#   ####                   #",
   "#   ##       o             #",
   "# o  #         o       ### #",
   "#    #                     #",
   "############################"];

var directions = new Dictionary(
    {"n":  new Point( 0, -1),
     "ne": new Point( 1, -1),
     "e":  new Point( 1,  0),
     "se": new Point( 1,  1),
     "s":  new Point( 0,  1),
     "sw": new Point(-1,  1),
     "w":  new Point(-1,  0),
     "nw": new Point(-1, -1)});

function StupidBug() {}
StupidBug.prototype.act = function(surroundings) {
  return {type: "move", direction: "s"};
};
StupidBug.prototype.character = "o";

var wall = {};
wall.character = "#";

function Terrarium(plan) {
  var grid = new Grid(plan[0].length, plan.length);
  for (var y = 0; y < plan.length; y++) {
    var line = plan[y];
    for (var x = 0; x < line.length; x++) {
      grid.setValueAt(new Point(x, y),
          elementFromCharacter(line.charAt(x)));
    }
  }
  this.grid = grid;
}
Terrarium.prototype.toString = function(){
  var str = "";
  this.grid.each(function(point, value){
    if (point.x === 0 && point.y > 0) {
      str += "\n";
    }
    str += characterFromElement(value);
  });
  return str + "\n";
};

function elementFromCharacter(character) {
  if (character == " ")
    return undefined;
  else if (character == "#")
    return wall;
  else if (character == "o")
    return new StupidBug();
}

function characterFromElement(element) {
  if (element == undefined)
    return " ";
  else
    return element.character;
}
