const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

// x is declared as constant which makes it's value can not be reassigned.
// Also f1 function takes x's value and create a new variable with using that value and returning the new variable
// console.log(x) will be 9

// 'y' is an object with 'x' key
// when f2 function called it takes the object as an argument
// and inside of 'f2' object key x is reassigned
// that's why console.log(y) will be {x:10}