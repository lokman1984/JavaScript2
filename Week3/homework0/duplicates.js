const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];


function removeDuplicateLetters(letters) {
    return [...new Set(letters)];
  };
  console.log([...new Set(letters)]);