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
  if (!verificationConditionsVictory(cell)) {
    transitionPprogress();
  }
}

var cellIsOccupiedMessage = "This cell is not empty!";
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

var winner = "#{winner}";
var postVictory = "Player:\"" + winner + "\" wins!";
function verificationConditionsVictory(cell) {
  var cellIdSplitArr = cell.id.split("_");
  var rowIndex = cellIdSplitArr[1];
  var columnIndex = cellIdSplitArr[2];

  if (playerWins(rowIndex, columnIndex)) {
    // JS not support interpolation strings = (
    var message = postVictory.replace(winner, currentCharacter);
    alert(message);
    initializeGame();
    return true;
  }
  return false;
}

function playerWins(rowIndex, columnIndex) {
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
