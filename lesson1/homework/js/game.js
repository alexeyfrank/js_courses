var playerСharacter = "X";
var computerCharacter = "O";
var currentCharacter;

function initializeGame() {
  clearFields();
  currentCharacter = playerСharacter;
}

var cellClassName = "div-table-col";
var emptyString = "";
function clearFields() {
  var cellArr = document.getElementsByClassName(cellClassName);
  for (var cell in cellArr) {
    cellArr[cell].innerHTML = emptyString;
  }
}

function stroke() {
  var cell = event.target;
  takeСell(cell);
  verificationConditionsVictory();
  transitionPprogress();
}

var cellIsOccupiedMessage = "Эта ячейка занята!";
function takeСell(cell) {
  var text = cell.innerHTML;
  if (strEmpty(text)) {
    cell.innerHTML = currentCharacter;
  } else {
    alert(cellIsOccupiedMessage);
  }
}

var anyWhitespaceCharacterRegexp = /\s/g;
function strEmpty(str) {
  str = str.replace(anyWhitespaceCharacterRegexp, emptyString);
  if (emptyString === str) {
    return true;
  }
  return false;
}

function verificationConditionsVictory() {
  return false;
}

function transitionPprogress() {
  if (currentCharacter == playerСharacter) {
    currentCharacter = computerCharacter;
  } else {
    currentCharacter = playerСharacter;
  }
}

initializeGame();
