let bj = {color:1};
console.log(typeof obj);
let fun = function () {
  this.color = 1;
}
console.log(typeof fun);

let Shape = function() {
  this.stroke = 1;
  this.color = 'white';
  function draw() {
    console.log('draw=====>');
  }
}

let rectangle = new Shape();
let circle = new Shape();

rectangle.color = 'green';
Shape.background_color = 'pink';
console.log(rectangle.color);
console.log(circle.color);

circle.move = function(x, y) {
  console.log(`move : ${x}, ${y}`);
}
Shape.moveTo = function(x, y) {
  console.log(`moveTo : ${x}, ${y}`);
}
circle.move(10, 20);
rectangle.moveTo(10,20);