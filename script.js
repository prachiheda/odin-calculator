let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false


const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equals')
const clearButton = document.getElementById('clear')
const pointButton = document.getElementById('decimalPoint')
const lastOperationScreen = document.getElementById('lastOperationScreen')
const currentOperationScreen = document.getElementById('currentOperationScreen')


equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)
pointButton.addEventListener('click', appendPoint)

numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)
  
operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
      resetScreen()
    currentOperationScreen.textContent += number
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOperationScreen.textContent === '')
      currentOperationScreen.textContent = '0'
    if (currentOperationScreen.textContent.includes('.')) return
    currentOperationScreen.textContent += '.'
  }
  
function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperationScreen.textContent
    currentOperation = operator
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
  }

function clear() {
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = ''
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
  }

  function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    secondOperand = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(
      operate(currentOperation, firstOperand, secondOperand)
    )
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
  }
  
  function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

function operate(operator, a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator){
        case "+":
            return addition(a,b)
        case "-":
            return subtraction(a,b)    
        case "*":
            return multiplication(a,b)
        case "%":
            return mod(a,b)
        case "÷":
            if(b!=0){
                return division(a,b)
            }
            return "null"
        default:
            return null
    }
}

function addition (a, b){
    return a+b
}

function subtraction (a, b){
    return a-b
}

function multiplication (a, b){
    return a*b
}

function division (a, b){
    return a/b
}

function mod (a, b){
    return a%b
}