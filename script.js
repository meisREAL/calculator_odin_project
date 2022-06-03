let displayText = [];
let operand = '';
let numA;
let numB;


let calculator = {
    add: function (a, b) {
        console.log(a + b);
        return a + b;

    },
    subtract: function (a, b) {
        console.log(a - b);
        return a - b;
    },
    multiply: function (a, b) {
        console.log(a * b);
        return a * b;
    },
    divide: function (a, b) {
        console.log(a / b);
        return a / b;
    }
}

function operate() {
    let a = prompt();
    let b = prompt();
    switch (prompt()) {
        case '+':
            calculator.add(a, b);
            break;
        case '-':
            calculator.subtract(a, b);
            break;
        case '*':
            calculator.multiply(a, b);
            break;
        case '/':
            calculator.divide(a, b);
            break;
        default:
            console.log('WHOOPS');
    }
}

function populateDisplay() {

    const display = document.querySelector('.display');
    displayText.push(this.textContent);
    display.textContent = displayText.join('');


    console.log(displayText)

}

function cutArray() {
    for (i = 0; i < displayText.length; i++) {
        if (displayText[i] == '+' || displayText[i] == '-' || displayText[i] == '*' || displayText[i] == '/') {
            operand = displayText[i]
            numA = displayText.splice(0, i).join('');
            numB = displayText.slice(1).join('')
        }
    }
    console.log(numA);
    console.log(operand);
    console.log(numB);

}

const btns = document.querySelectorAll('.button');
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', populateDisplay);
}