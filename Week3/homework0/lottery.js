function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    // make array
    while (startIndex <= stopIndex) {
      numbers.push(startIndex);
      startIndex++;
    }
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
    numbers.forEach(item => {
      if (item % 3 === 0 && item % 5 === 0) {
        console.log(item + sayThree() + ' and ' + item + sayFive());
      } else if (item % 3 === 0) {
        console.log(item + sayThree());
      } else if (item % 5 === 0) {
        console.log(item + sayFive());
      }
    });
  }
  function sayThree() {
    return ' is divisible by 3';
  }
  function sayFive() {
    return ' is divisible by 5';
  }
  threeFive(10, 15, sayThree, sayFive);
  
  // Should create an array [10,11,12,13,14,15]
  // and call sayFive, sayThree, sayThree, sayFive