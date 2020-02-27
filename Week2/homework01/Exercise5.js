const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];
let h3 = document.createElement('h3');
h3.innerText = 'My Hobbies'
  let ul = document.createElement('ul');
  myHobbies.forEach((myHobbie) => {
    
    let li = document.createElement('li');
    li.textContent = myHobbie;
    ul.appendChild(li);

});
document.body.appendChild(h3);
document.body.appendChild(ul);


