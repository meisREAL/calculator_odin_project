let displayText = [];
let operand = '';
let operandB = '';
let numA;
let numB;
const display = document.querySelector('.display');


let calculator = {
    add: function (a, b) {
        result = a + b;
        display.textContent = result;
        numB = result;
        displayText = [];
    },
    subtract: function (a, b) {
        result = a - b;
        display.textContent = result;
        numB = result;
        displayText = [];
    },
    multiply: function (a, b) {
        result = a * b;
        display.textContent = result;
        numB = result;
        displayText = [];
    },
    divide: function (a, b) {
        result = a / b;
        display.textContent = result;
        numB = result;
        displayText = [];
    }
}


function operate() {
    let temp;
    operand = this.textContent;
    temp = operandB;
    operandB = operand;
    operand = temp;

    swapNumbers();
    if (operand == '+') {
        if (numA == undefined) {
            return;
        }
        calculator.add(numA, numB);
    } else if (operand == '-') {
        if (numA == undefined) {
            return;
        }
        calculator.subtract(numA, numB);
    } else if (operand == '/') {
        if (numA == undefined) {
            return;
        }
        calculator.divide(numA, numB);
    } else if (operand == '*') {
        if (numA == undefined) {
            return;
        }
        calculator.multiply(numA, numB);
    } else {
        return;
    }
}

function populateDisplay() {

    displayText.push(this.textContent);
    display.textContent = displayText.join('');
}



function swapNumbers() {
    let temp;
    numA = Number(displayText.splice(0, displayText.length).join(''));
    temp = numB;
    numB = numA;
    numA = temp;

}




const btns = document.querySelectorAll('.button');
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', populateDisplay);
}

const evalButton = document.querySelector('#equal');
evalButton.addEventListener('click', operate);

const operationButton = document.querySelectorAll('.buttonOperation');
for (i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener('click', operate)
}
