const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];


const totalAge =hackYourFutureMembers.map((hyfage)=>hyfage.age).reduce((calc,elem)=>{
return calc + elem;
},0)
console.log(`The collective age of the HYF team is: ${totalAge}`)


