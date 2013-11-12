var playerСharacter = "X";
var computerCharacter = "O";
var currentCharacter;

function initializeGame() {
  currentCharacter = playerСharacter;
}

function stroke() {
  var cell = event.target;
  takeСell(cell);
  verificationConditionsVictory();
  transitionPprogress();
}

initializeGame();
