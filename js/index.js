
var letsRoll = function(rollDice){
  var randomRoll = Math.floor(Math.random() * 6 + 1);
  console.log(randomRoll);
  var diceSquares = document.getElementsByTagName('div');
  switch (randomRoll) {
    case 1:
    diceSquares[10].innerHTML = "DOT";
      break;
    case 2:
    diceSquares[12].innerHTML = "DOT";
    diceSquares[16].innerHTML = "DOT";
      break;
    case 3:
    diceSquares[4],[10],[16].innerHTML = "DOT";
      break;
    case 4:
    diceSquares[2],[6],[14],[18].innerHTML = "DOT";
      break;
    case 5:
    diceSquares[2],[6],[10],[14],[18].innerHTML = "DOT";
      break;
    default: diceSquares[2],[8],[14],[6],[12],[18].innerHTML = "DOT";
  } //END OF SWITCH STATEMENT
} //END OF MASSIVE FUNCTION
