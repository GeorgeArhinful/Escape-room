//  Introduce the game and the describe the map of the room
// bed, wardrobe, table, television, jewellry box, windows, carbinet, hole in wall
//2. Recieve input from users search
//if user enters window,wall, carbinet user dies and game ends
// if user enters under the bed then key is found
// when key is found and user opens door then user wins
// if key is not found and user opens door. door remains locked
// if games runs for more than 10min user dies
//1. Introduce the game*
//2. initialize key to be false, moves = 20, score = 0, input ="" life = true*
//3. Ask for users input with readlineisync and store in the variable input*
//4. if indexOf(input) has table, wardrobe, television, jewellry box, bed  key = false, move--,*
//5. if indexOf(input) has carbinet, window hole in the wall key = false, moves--, life = false
//6. if indexOf(input) has under the bed key = true, moves--
//7. if indexOf(input) has door and key = true then open door = true log out user won .else false
//8. if move = 0 life = false
//9. while life = ture do 1 - 8 else log ou you lost
//  Introduce the game and the describe the map of the room
// bed, wardrobe, table, television, jewellry box, windows, carbinet, hole in wall
//2. Recieve input from users search
//if user enters window,wall, carbinet user dies and game ends
// if user enters under the bed then key is found
// when key is found and user opens door then user wins
// if key is not found and user opens door. door remains locked
// if games runs for more than 10min user dies
//1. Introduce the game*
//2. initialize key to be false, moves = 20, score = 0, input ="" life = true*
//3. Ask for users input with readlineisync and store in the variable input*
//4. if indexOf(input) has table, wardrobe, television, jewellry box, bed  key = false, move--,*
//5. if indexOf(input) has carbinet, window hole in the wall key = false, moves--, life = false
//6. if indexOf(input) has under the bed key = true, moves--
//7. if indexOf(input) has door and key = true then open door = true log out user won .else false
//8. if move = 0 life = false
//9. while life = ture do 1 - 8 else log ou you lost
var readlineSync = require("readline-sync");
var key = false;
var moves = 10;
var life = true;
var score = 0;
var falseItems = ["table", "wardrobe", "television", "jewellry", "bed", "box"];
var deathItems = ["carbinet", "window", "wall"];
console.log("Welcome to Room No Retrun!! \n\n In this room there are the following items: television, bed, wardrobe, jewellry box, window, carbinet, hole in a wall, table\n\n Look for the key and open the door to your freedom ");
while (life === true && moves !== 0) {
  var check = function(str, arr) {
    output = false;
    for (var i = 0; i < arr.length; i++) {
      if (str.indexOf(arr[i]) === -1) {
        output = false;
      } else {
        output = true;
        break;
      }
    }
    return output;
  }
  //console.log(check("bed",falseItems));
  var input = readlineSync.question("Where do you want to check? ");
  if (check(input, falseItems) === true && input.indexOf("under the bed") === -1) {
    for (var i = 0; i < falseItems.length; i++) {
      if (input.indexOf(falseItems[i]) !== -1) {
        console.log("You check the " + falseItems[i] + " and there was no key try somewhere else");
        moves--;
      }
    }
  } else if (check(input, deathItems) === true && input.indexOf("under the bed") === -1) {
    for (var i = 0; i < deathItems.length; i++) {
      if (input.indexOf(deathItems[i]) !== -1) {
        moves--;
        console.log("You at the " + deathItems[i] + " and you got electrocuted and died ");
        console.log("You used " + (10 - moves) + " moves and your score was " + (moves * 7) + "\n\n GAME OVER");
        moves = 0;
        life = !life;
      }
    }
  } else if (input.indexOf("under the bed") !== -1 && key === false) {
    console.log("Hurray!! You found the key. Now proceed top open the door");
    moves--;
    key = true;
    var input2 = readlineSync.question("Go and open the door now ");
    moves--;
      while (input2.indexOf("door") === -1) {
        input2 = readlineSync.question("Go and open the door now ");
        moves--;
      }
    if (input2.indexOf("door") !== -1) {
      console.log("You have earned your freedom. Awesome!!");
      console.log("You used " + (10 - moves) + " moves and your score was " + (moves * 55));
      life = !life
    } else {
      console.log("Do not waste time!");
      input2 = readlineSync.question("Go and open the door now ");
      moves--;
    }
  } else if (input.indexOf("door") !== -1) {
    console.log("You need the key to open the door");
  } else {
    console.log("I do not understand that commmand");
    moves--;
  }
}
if (moves === 0) {
    console.log("You used " + (10 - moves) + " moves and your score was " + (moves * 7) + "\n\n GAME OVER");
}
