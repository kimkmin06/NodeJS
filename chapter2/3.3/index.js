const {odd,even} = require('./var.js');
const checkNumer = require('./func.js');

function checkStringOddorEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNumer(10));
console.log(checkStringOddorEven('hello'));