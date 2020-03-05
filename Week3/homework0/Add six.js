{
    function createBase(base) {
      // Put here your logic...
      function add(number) {
        return base + number;
      }
      return add;
    }
  
    const addSix = createBase(6);
    const addOne = createBase(1);
  
    // Put here your function calls...
    // Call the function three times. The return values should be:
    // 15
    // 24
    // 36
    console.log(addSix(9));
    console.log(addSix(18));
    console.log(addSix(30));
  }