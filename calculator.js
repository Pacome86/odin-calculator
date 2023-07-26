// Basic math operations

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function percent(a) {
    return a / 100;
}

function reverse(a) {
    return -(a);
}


// Variables for each part of an operation for example 3 + 5:
let firstOperand;
let secondOperand;
let operator;

function operate(operator, firstOperand, secondOperand) {
    if (operator === '+') {
        return add(firstOperand, secondOperand);
    } else if (operator === '-') {
        return subtract(firstOperand, secondOperand);
    } else if (operator === '×') {
        return multiply(firstOperand, secondOperand);
    } else if (operator === '÷') {
        return divide(firstOperand, secondOperand);
    } else if (operator === '%' && secondOperand === undefined) {
        return percent(firstOperand);
    } else if (operator === '+/-' && secondOperand === undefined) {
        return reverse(firstOperand);
    }
}

// console.log(operate('÷', 20, 5));








































// function Calculator() {
//     this.methods = {
//         '+': (a, b) => (a + b),
//         '-': (a, b) => (a - b),
//         '*': (a, b) => (a * b),
//         '÷': (a, b) => (a / b),
//         '%': a => (a / 100)
//     };

//     this.calculate = function (string) {
//         let split = string.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];
//         return this.methods[op](a, b);
//     }
// }

// const calc = new Calculator;

// console.log(calc.calculate('3 + 7'));
// console.log(calc.calculate('20%'));


// const calculator = {
//     'operands': {
//         '+': (a, b) => (a + b),
//         '-': (a, b) => (a - b),
//         '*': (a, b) => (a * b),
//         '/': (a, b) => (a / b),
//     }
// }