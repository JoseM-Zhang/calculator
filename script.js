let firstCalc = false, resultDisplay = '', currentNumber, previousNumber, operator = '', lastResult, lastCurrent;
const buttonOperator = document.querySelectorAll('.operator');
buttonOperator.forEach((button) => {
    button.addEventListener('click', (Event) => {
        if(previousNumber == null || (previousNumber !== lastResult && firstCalc == true)){
            displayToPrevious();
            clearResult();
        }
        else{
            displayToCurrent();
            clearResult();
        }
        if(previousNumber != null && (currentNumber != null && currentNumber != lastCurrent)){
            operate();
        }
        operator = button.value;
    })
})

function add (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (result) {
    
    switch (operator) {
        case '+':
            result = add(previousNumber, currentNumber);
            break;
        case '-':
            result = substract(previousNumber, currentNumber);
            break;
        case '*':
            result = multiply(previousNumber, currentNumber);
            break;
        case '/':
            result = divide(previousNumber, currentNumber);
            break;
        default:
            break;
    }
    firstCalc = true;
    lastResult = result;
    lastCurrent = currentNumber;
    appendToResult(result);
}

function appendToResult(val) {
    resultDisplay += val;
    document.getElementById("result").value = resultDisplay;
}

function displayToPrevious() {
    if(resultDisplay != '')
        previousNumber = parseFloat(resultDisplay);
}

function displayToCurrent() {
    if(resultDisplay != '')
        currentNumber = parseFloat(resultDisplay);
}

function clearResult() {
	resultDisplay = '';
	document.getElementById("result").value = '0';
}