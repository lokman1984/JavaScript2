{
    const amount = document.querySelector('span#amount');
    const calcButton = document.querySelector('button');
    const each = document.querySelector('p#each');
    function calcTipAmount(event) {
      event.preventDefault();
      const billAmount = Number(document.querySelector('input#bill').value);
      const serviceValue = Number(document.querySelector('select#service').value);
      const people = Number(document.querySelector('input#people').value);
      if (
        document.querySelector('input#bill').value !== '' &&
        document.querySelector('input#people').value !== ''
      ) {
        if (people === 1) {
          each.style.display = 'none';
        } else {
          each.style.display = 'block';
        }
        const tipAmount = ((billAmount * serviceValue) / 100 / people).toFixed(2);
        amount.innerHTML = tipAmount;
      } else alert('You need to fill in all the fields!');
  
      return true;
    }
    calcButton.addEventListener('click', calcTipAmount);
  }