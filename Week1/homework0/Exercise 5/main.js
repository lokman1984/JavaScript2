
const img = document.querySelector('img');
img.style.left = '0';
let intervalId;
let canWalk = true;

function catWalk() {
  let positionLeft = parseFloat(img.style.left);
  positionLeft += 10;
  img.style.left = positionLeft + 'px';
  if (window.innerWidth <= positionLeft * 2 + img.clientWidth && canWalk) {
    img.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    clearInterval(intervalId);
    setTimeout(function() {
      img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      intervalId = setInterval(catWalk, 50);
      canWalk = false;
    }, 5000);
  } else if (window.innerWidth < positionLeft) {
    img.style.left = 0;
    positionLeft = 0;
    canWalk = true;
  }
}
intervalId = setInterval(catWalk, 50);