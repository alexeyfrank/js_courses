// Work with DOM
var container = document.querySelector('#container');

container.style.position = 'absolute';
container.style.width = '100px';
container.style.height = '100px';
container.style.backgroundColor = '#000';

var left = 0;
var offset = 1;
setInterval(function() {
  left += offset;
  container.style.left = left + 'px';
}, 10);

// Simple animation
// var left = 0;
// var offset = 1;
// setInterval(function() {
//   left += offset;
//   container.style.left = left + 'px';
// }, 10);
// 
// console.log(container);
