let displayText = [];
let operand = '';
let numA;
let numB;
const display = document.querySelector('.display');


let calculator = {
    add: function (a, b) {
        result = a + b;
        display.textContent = result;
        displayText.splice(0, displayText.length);
        displayText.splice(1, 0, result);
    },
    subtract: function (a, b) {
        result = a - b;
        display.textContent = result;
        displayText.splice(0, displayText.length);
        displayText.splice(1, 0, result);
    },
    multiply: function (a, b) {
        result = a * b;
        display.textContent = result;
        displayText.splice(0, displayText.length);
        displayText.splice(1, 0, result);
    },
    divide: function (a, b) {
        result = a / b;
        display.textContent = result;
        displayText.splice(0, displayText.length);
        displayText.splice(1, 0, result);
    }
}


function operate() {
    cutArray();
    if (operand == '+') {
        calculator.add(numA, numB);
    } else if (operand == '-') {
        calculator.subtract(numA, numB);
    } else if (operand == '/') {
        calculator.divide(numA, numB);
    } else if (operand == '*') {
        calculator.multiply(numA, numB);
    } else {
        return;
    }
}

function populateDisplay() {

    // const display = document.querySelector('.display');
    displayText.push(this.textContent);
    display.textContent = displayText.join('');


    console.log(displayText)

}

function cutArray() {
    for (i = 0; i < displayText.length; i++) {
        if (displayText[i] == '+' || displayText[i] == '-' || displayText[i] == '*' || displayText[i] == '/') {
            operand = displayText[i]
            numA = Number(displayText.splice(0, i).join(''));
            numB = Number(displayText.slice(1).join(''));

        }
    }

    // console.log(numA);
    // console.log(operand);
    // console.log(numB);
}


const btns = document.querySelectorAll('.button');
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', populateDisplay);
}

const evalButton = document.querySelector('#equal');
evalButton.addEventListener('click', operate);