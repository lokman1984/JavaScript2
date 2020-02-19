
// console.log(h1)

// let timeClock = setInterval(setTimes, 1000);

// function setTimes() {
//     let  x = new Date();
    
//     document.querySelector('#time').innerHTML = x.toLocaleTimeString();
// }
var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
