var playerСharacter = "X";
var computerCharacter = "O";
var currentCharacter;
var zeroBased = 0;
var columnStartVal = zeroBased;
var columnSize = 3;
var rowSize = 3;
var rowStartVal = zeroBased;

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
  return horizontalCheck(rowIndex) || verticalCheck(columnIndex)
    || diagonalsCheck();
}

function horizontalCheck(rowIndex) {
  for (var columnId = columnStartVal; columnId < columnSize; columnId++) {
    var cellId = "cell_" + rowIndex + "_" + columnId;
    var cell = document.getElementById(cellId);
    if (cell.innerHTML != currentCharacter) {
      return false;
    }
  }
  return true;
}

function verticalCheck(columnIndex) {
  for (var rowId = rowStartVal; rowId < rowSize; rowId++) {
    var cellId = "cell_" + rowId + "_" + columnIndex;
    var cell = document.getElementById(cellId);
    if (cell.innerHTML != currentCharacter) {
      return false;
    }
  }
  return true;
}

function diagonalsCheck() {
  return mainDiagonalCheck();
}

function mainDiagonalCheck() {
  var mainDiagonal = getMainDiagonal();
  var sum = 0;
  for (var cellId in mainDiagonal) {
    var cell = document.getElementById(mainDiagonal[cellId]);
    if (cell.innerHTML == currentCharacter) {
      sum++;
    }
  }
  return sum == mainDiagonal.length? true : false;
}

var cellPrefix = "cell_"
function getMainDiagonal() {
  var arr = [];
  for (var rowId = rowStartVal; rowId < rowSize; rowId++) {
    arr.push(cellPrefix + rowId + "_" + rowId);
  }
  return arr;
}

function transitionPprogress() {
  if (currentCharacter == playerСharacter) {
    currentCharacter = computerCharacter;
  } else {
    currentCharacter = playerСharacter;
  }
}

initializeGame();
