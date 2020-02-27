const myNumbers = [1, 2, 3, 4];

const eveNum=myNumbers.filter((x)=>x % 2 == 0);
const doubledNumbers = eveNum.map(x => x*2);
console.log(eveNum);
console.log(doubledNumbers)