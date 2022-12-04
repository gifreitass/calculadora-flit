//quando clicar no botão, o número deve aparecer na tela da calculadora

const calculatorNumbers = document.getElementsByClassName('calculatorNumbers')
const calculatorElements = document.getElementsByClassName('calculatorElements')
const calculatorScreen = document.getElementById('calculatorScreen')
const equal = document.getElementById('equal')

let firstNumber = ''
let lastNumber = ''
let operationSignal = ''

function screenNumbers(e){
    calculatorScreen.innerHTML += e.target.innerText;
    if (operationSignal == ''){
        firstNumber += e.target.innerText
    } else {
        lastNumber += e.target.innerText
    }
}

//currentTarget: serve para a div, sem se importar com o que está sendo clicado no conteúdo dela
function screenElements(e){
    let id = e.currentTarget.id
    operationSignal = id
    if(id == 'division'){
        calculatorScreen.innerHTML += ':';
    } else if (id == 'multiplication'){
        calculatorScreen.innerHTML += 'x';
    } else if (id == 'subtraction'){
        calculatorScreen.innerHTML += '-';
    } else if (id == 'plus'){
        calculatorScreen.innerHTML += '+';
    } 
}


function operation(){   
    firstNumber = parseFloat(firstNumber)
    lastNumber = parseFloat(lastNumber)

    let finalResult = 0

    if(operationSignal == 'division'){
        finalResult = firstNumber / lastNumber
    } else if(operationSignal == 'multiplication'){
        finalResult = firstNumber * lastNumber
    } else if(operationSignal == 'subtraction'){
        finalResult = firstNumber - lastNumber
    } else if(operationSignal == 'plus'){
        finalResult = Number(firstNumber) + Number(lastNumber)
    }

    calculatorScreen.innerHTML = finalResult
}

//Array.from transforma o calculatorNumbers (que é um HTMLCollection) em um array de verdade

Array.from(calculatorNumbers).forEach(number => {
    number.addEventListener('click', screenNumbers)
});

Array.from(calculatorElements).forEach(element => {
    element.addEventListener('click', screenElements)
});

equal.addEventListener('click', operation)
