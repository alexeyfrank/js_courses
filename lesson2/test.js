function Animal(name) {
  this.name = name;
}

// var obj = {}
// Animal.apply(obj)
// obj.__proto__ = Animal.prototype;

function Rabbit(name) {
  Animal.prototype.constructor.call(this, name);
}

Rabbit.prototype = new Animal();

