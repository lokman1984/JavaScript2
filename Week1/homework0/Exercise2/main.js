
//font family 
document.querySelector('body').style.fontFamily = "Arial, sans-serif";
// change information

let nickName = document.querySelector('#nickname');
nickName.innerText ='Lokman Dlimi'

let favFood = document.querySelector('#fav-food');
favFood.innerText = 'basta';

let homeTown = document.querySelector('#hometown');
homeTown.innerText = 'Syria';

//change list-item
li= document.querySelectorAll('li');
for(let i=0;i<li.length;i++){
li[i].style.listStyleType = 'square';
}

//5

//img
imgCreate = document.createElement('img');
imgCreate.src = "img.png";
document.body.appendChild(imgCreate);



