const upArrow = document.querySelector('#up');
const downArrow = document.querySelector('#down');
const sessionLength = document.querySelector('#sessionLength');
const timerMinutes = document.querySelector('span#minutes');
const timerSeconds = document.querySelector('span#seconds');
const play = document.querySelector('span#play');
const pause = document.querySelector('span#pause');
const replay = document.querySelector('#replay');
let running = false; // running is a kind of flag that controls if clock is running or not.
function checkDigit(i) {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10
  return i;
}
function changeMinutes(minutes) {
  timerMinutes.textContent = checkDigit(minutes);
}
function changeSeconds(seconds) {
  timerSeconds.textContent = checkDigit(seconds);
}
function sessionLengthUp() {
  if (running === false) {
    // If timer is running this function will not run.
    length = Number(sessionLength.textContent);
    length++;
    sessionLength.textContent = checkDigit(length);
    changeMinutes(length);
    changeSeconds(0);
    // When the clock paused some point like 01:37
    // and sessionLength changed, this will be clear seconds to _:00
  }
}
function sessionLengthDown() {
  if (running === false) {
    // If timer is running this function will not run.
    let length = Number(sessionLength.textContent);
    length > 0 ? length-- : ''; // sessionLength can not go down after reaching 0
    sessionLength.textContent = checkDigit(length);
    changeMinutes(length);
    changeSeconds(0);
    // When the clock paused some point like 01:37
    // and sessionLength changed, this will be clear seconds to _:00
  }
}
function playSeconds() {
  if (Number(timerMinutes.textContent) > 0 || Number(timerSeconds.textContent) > 0) {
    // if minutes or seconds bigger than 0 my playSeconds function can run.
    running = true;
    var minutes = Number(timerMinutes.textContent);
    if (Number(timerSeconds.textContent) === 0) {
      var seconds = 59; // if seconds equal to 00 (like 03:00) change seconds as 59
      // and decrease 1 minute (as 02:59)
      minutes--;
      changeMinutes(minutes);
      changeSeconds(seconds);
    } else {
      // if seconds not equal zero means clock paused some point (like 1:37)
      // take seconds from timerSeconds then decrease 1
      seconds = timerSeconds.textContent;
      seconds--;
      changeSeconds(seconds);
    }
    secondInterval = setInterval(function() {
      seconds--; // setting interval until timerSeconds reaches to 00
      changeSeconds(seconds);
      if (!seconds) {
        // when seconds reaches 00 clearing interval
        // and calling the playSeconds function again until time is up
        clearInterval(secondInterval);
        setTimeout(playSeconds, 1000);
        running = false;
      }
      if (!minutes && !seconds) {
        // When timer is 00:00 calling the timesUp function
        timesUp();
      }
    }, 1000);
  }
}
function stopPlaying() {
  running = false;
  clearInterval(secondInterval);
}
function timesUp() {
  document.querySelector('#session p').innerHTML =
    " <span id='replay'> Time's up! <i class='fas fa-history'></i> </span>";
  document.querySelector('#session p').style.fontSize = '2.5rem';
}

upArrow.addEventListener('click', sessionLengthUp);
downArrow.addEventListener('click', sessionLengthDown);
play.addEventListener('click', playSeconds);
pause.addEventListener('click', stopPlaying);
$(document).on('click', '#replay', function() {
  location.reload(); // after times up clicked reload the page
});
// since span#replay created after timesUp function called
// I have to use document.on('click').
// If I use document.querySelector('#replay).addEventListener('click') it is not work
// Because 'replay' is created some point after all dom loaded
// And I don't know how to handle this problem without jquery so I used it.