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
let displayText = [];

function populateDisplay() {


    // const pressedButton = this.querySelector('.button');
    const display = document.querySelector('.display');
    // display.textContent = this.textContent
    displayText.push(this.textContent);
    displayText.join('');
    display.textContent = displayText.join('');

    console.log(displayText)
}
const btns = document.querySelectorAll('.button');
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', populateDisplay);
}