const triggerBtn = document.querySelector("#calculateBtn");
const result = document.querySelector(".result");

triggerBtn.addEventListener("click", function(){

    const elements = {
        numberInputs: {
            first: Number(document.querySelector("#number-1").value),
            second: Number(document.querySelector("#number-2").value),
        },
        selectedRadioBtn: document.querySelector("input[name=botao]:checked"),
    }

    let calculatedResult;
    let { first : firstNumber, second : secondNumber  } = elements.numberInputs;

    switch(elements.selectedRadioBtn.id) {
        case 'botao-1':
            calculatedResult = firstNumber + secondNumber;
        break;

        case 'botao-2':
            calculatedResult = firstNumber - secondNumber;
        break;

        case 'botao-3':
            calculatedResult = firstNumber * secondNumber;
        break;

        case 'botao-4':
            calculatedResult = firstNumber / secondNumber;
        break;

        case 'botao-5':
            calculatedResult = Math.floor(firstNumber / secondNumber);
        break;

        case 'botao-6':
            calculatedResult = firstNumber % secondNumber;
        break;
    }

    result.innerHTML = `Resultado = ${calculatedResult}.`

})