let func = function() {
  console.log('hello');
}
//func();

//즉시실행
(function() {
  console.log('hello');
});

const arr = [1,2,3,4,5];
let [val1,val2,...restval] = arr;


function outerFunc() {
  var x=10;
  var innerFunc = function(){console.log(x)};
}
var inner = outerFunc();
inner();

function add() {
  var a=10;
  a+=1;
  console.log(a);
}

add();