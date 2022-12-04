//quando clicar no botão, o número deve aparecer na tela da calculadora

//CRIANDO VARIÁVEIS
const calculatorNumbers = document.getElementsByClassName('calculatorNumbers')
const calculatorElements = document.getElementsByClassName('calculatorElements')
const calculatorScreen = document.getElementById('calculatorScreen')
const equal = document.getElementById('equal')
const lastResult = document.getElementById('lastResult')

let firstNumber = ''
let lastNumber = ''
let operationSignal = ''

//CRIANDO FUNÇÕES PARA OS NÚMEROS E OPERADORES APARECEREM ASSIM QUE CLICARMOS 
function screenNumbers(e){
    calculatorScreen.innerHTML += e.target.innerText;
    if (operationSignal == ''){
        firstNumber += e.target.innerText
    } else {
        lastNumber += e.target.innerText
    }
}

//Array.from transforma o calculatorNumbers (que é um HTMLCollection) em um array de verdade
Array.from(calculatorNumbers).forEach(number => {
    number.addEventListener('click', screenNumbers)
});

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

Array.from(calculatorElements).forEach(element => {
    element.addEventListener('click', screenElements)
});

//FUNÇÃO PARA REALIZAR AS OPERAÇÕES
let finalResult = 0

function operation(){   
    firstNumber = parseFloat(firstNumber)
    lastNumber = parseFloat(lastNumber)

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

equal.addEventListener('click', operation)

//SALVANDO NO LOCAL STORAGE
function prevResult(){
    lastResult.innerHTML = finalResult
    window.localStorage.setItem('lastResult', finalResult)
}

equal.addEventListener('click', prevResult)

//PEGANDO O ITEM ANTIGO
let getItem = window.localStorage.getItem('lastResult')

function getLastResult(){
    if(!getItem){
        lastResult.innerHTML = 0
    } else{
        lastResult.innerHTML = getItem
    }
}

window.addEventListener('load', getLastResult)