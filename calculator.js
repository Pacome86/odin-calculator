const initCalc = () => {
    const currentValueElem = document.querySelector('.currentvalue');
    const previousValueElem = document.querySelector('.previousvalue');
    let itemArray = [];
    const equationArray = [];
    let newNumberFlag = false;

    const inputButtons = document.querySelectorAll('.number');
    inputButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const newInput = e.target.textContent;
            if (newNumberFlag) {
                currentValueElem.value = newInput;
                newNumberFlag = false;
            } else {
                currentValueElem.value =
                    currentValueElem.value == 0
                        ? newInput
                        : `${currentValueElem.value}${newInput}`;
            }
            
        });
    });

    const opButtons = document.querySelectorAll('.operator');
    opButtons.forEach(button => {
        button.addEventListener('click', (e) => {})
    })

    const dotButton = document.querySelector('.decimal');
    dotButton.addEventListener('click', (e) => {
        const newInput = e.target.textContent;
        
        if (currentValueElem.value.includes('.')) {
            return e.target.innerText === null;
        } else {
            currentValueElem.value += newInput;
        }
    });

    const allClearButton = document.querySelector('.allClear');
    allClearButton.addEventListener('click', (e) => {
        currentValueElem.value = 0;
        previousValueElem.textContent = '';
        itemArray = [];
    });

    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', (e) => {
        currentValueElem.value = currentValueElem.value.slice(0, -1);
    });

    const signChangeButton = document.querySelector('.signChange');
    signChangeButton.addEventListener('click', () => {
        currentValueElem.value = parseFloat(currentValueElem.value) * -1;
    });

    const percentButton = document.querySelector('.percent');
    percentButton.addEventListener('click', () => {
        currentValueElem.value = parseFloat(currentValueElem.value) / 100;
    });
}

document.addEventListener('DOMContentLoaded', initCalc)

















































/*
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
// let operation;

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

// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable 
// somewhere for use in the next step.
const operandButtons = Array.from(document.querySelectorAll('.operand'));
const operatorButtons = Array.from(document.querySelectorAll('.operator'));
const clearButtons = Array.from(document.querySelectorAll('.clear'));
const decimalButton = document.querySelector('.decimal'); 
const equalsButton = document.querySelector('.equals');
const displayOperation = document.querySelector('.operation');
const displayResult = document.querySelector('.result');

// Display numbers and store in the operand variable

let operand = operandButtons.map(button => {
    button.addEventListener('click', (e) => {
        const number = []
        displayOperation.innerText += e.target.innerText;
        number.push(displayOperation.innerText);
        operand = number.slice(-1).toString();
        return operand;
        
    });
});

// So the decimal (.) won't be displayed more than once

decimalButton.addEventListener('click', (e) => {
    if (displayOperation.innerText.includes('.')) {
        return e.target.innerText === null;
    } else {
        return displayOperation.innerText += e.target.innerText;
    }
});

// Buttons AC to clear everything and button C to clear the last number:
clearButtons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                displayOperation.innerText = '';
                displayResult.innerText = '';
                break;
            case 'C':
                if (displayOperation.innerText) {
                    displayOperation.innerText = displayOperation.innerText.slice(0, -1);
                }
                break;
        }
    });
});

// Choose an operator
operatorButtons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case '+':
                firstPart = operand;
                console.log(operand);
                displayOperation.innerText += e.target.innerText;

        }
    });
});

equalsButton.addEventListener('click', (e) => {
    
    if (e.target.innerText) {
        let string = displayOperation.innerText;
        console.log(string);
        let split = string.split('');
        console.log(split);
        displayResult.innerText += operate(operator, firstOperand, secondOperand);

    } else if (displayOperation.innerText !== '') {
        console.log(displayOperation.innerText);
    }
})
*/









































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