let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

//let a = 10 declared as 'let' in global scope.it can be changeable and reachable from every scope.
//value change from 10 to 12 inside of the x function.
//the x function returning a closure function which is alerting value of 'a'.
//the closure go up and check the (last assigned) value of 'a'  and alert it as 12.