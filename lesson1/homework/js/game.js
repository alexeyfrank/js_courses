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
var cellIdSeparator = "_";
function verificationConditionsVictory(cell) {
  var cellIdSplitArr = cell.id.split(cellIdSeparator);
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

var cellPrefix = "cell_";
function horizontalCheck(rowIndex) {
  for (var columnId = columnStartVal; columnId < columnSize; columnId++) {
    var cellId = cellPrefix + rowIndex + cellIdSeparator + columnId;
    var cell = document.getElementById(cellId);
    if (cell.innerHTML != currentCharacter) {
      return false;
    }
  }
  return true;
}

function verticalCheck(columnIndex) {
  for (var rowId = rowStartVal; rowId < rowSize; rowId++) {
    var cellId = cellPrefix + rowId + cellIdSeparator + columnIndex;
    var cell = document.getElementById(cellId);
    if (cell.innerHTML != currentCharacter) {
      return false;
    }
  }
  return true;
}

function diagonalsCheck() {
  var mainDiagonal = getMainDiagonal();
  var incidentalDiagonal = getIncidentalDiagonal();

  return diagonalCheck(mainDiagonal) || diagonalCheck(incidentalDiagonal);
}

function diagonalCheck(diagonal) {
  var sum = 0;
  for (var cellId in diagonal) {
    var cell = document.getElementById(diagonal[cellId]);
    if (cell.innerHTML == currentCharacter) {
      sum++;
    }
  }
  return sum == diagonal.length? true : false;
}

function getMainDiagonal() {
  var arr = [];
  for (var rowId = rowStartVal; rowId < rowSize; rowId++) {
    arr.push(cellPrefix + rowId + cellIdSeparator + rowId);
  }
  return arr;
}

function getIncidentalDiagonal() {
  var arr = [];
  var index = columnSize;
  for (var rowId = rowStartVal; rowId < rowSize; rowId++) {
    index--;
    arr.push(cellPrefix + rowId + cellIdSeparator + index);
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
