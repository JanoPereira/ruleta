window.addEventListener("load",()=>{
    checkForNumericInputs();

    const sumCell = document.querySelector('.sum_cell');
    sumCell.addEventListener('click',()=>{
        let numberInputs = document.querySelectorAll(".number-input");
        let totalAmount = 0;
        let chipValue = document.querySelector('#chip_value');
        let betTotal = document.querySelector('#bet_total_cell');
        let valueCell = document.querySelector('#value_cell');
        
        if(!chipValue.value) return 

        numberInputs.forEach(inp => {
            if(inp.id == 'chip_value' || !inp.value)return;
            let multiplier = inp.closest('tr').querySelector('.multiplier')?.dataset?.multiply;
            multiplier = parseInt(multiplier)
            if(multiplier && inp.value > 0){
                totalAmount += multiplier * inp.value
            }
        });
        betTotal.innerHTML = totalAmount;
        valueCell.innerHTML = `$${displayBigNumbers(totalAmount * parseInt(chipValue.value))}`;
    });

    function checkForNumericInputs() {
        let numericInputs = document.querySelectorAll(".numeric_only_input");
        numericInputs.forEach((input) => {
          // Tomo el ultimo valor
          let lastInputValue = input.value;
          input.addEventListener("input", function (e) {
            var inputValueArray = e.target.value.split("");
            let flag = true;
            //Esto es para que me permita poner espacios
            inputValueArray.forEach((value) => {
              if (!isNumber(value) && value != " ") flag = false;
            });
      
            if (!flag) {
              // Si no es un número, borra el contenido del campo
              e.target.value = lastInputValue;
            } else {
              lastInputValue = e.target.value; // Almacenar el último valor válido
            }
          });
        });
      }
    function isNumber(value) {
        return /^[0-9]*$/.test(value);
      }
    function displayBigNumbers(nmbr) {
        return nmbr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
});