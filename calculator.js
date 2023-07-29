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
            // To know that the current input is a new number
            // not to be concatenated to the previous one.
            if (newNumberFlag) {
                currentValueElem.value = newInput;
                newNumberFlag = false; // number concatenated;
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
        button.addEventListener('click', (e) => {
            
            // When a new operation begins or equal sign showing
            // Meaning we complete an equation and are ready to
            // begin a new one or newNumberFlag = true;
            if (newNumberFlag) {
                previousValueElem.value = '';
                itemArray = [];
            }

            const newOperator = e.target.textContent;
            const currentVal = currentValueElem.value;
            
            // need number first
            if (!itemArray.length && currentVal == 0) return;

            // begin a new equation
            if (!itemArray.length) {
                itemArray.push(currentVal, newOperator);
                previousValueElem.textContent =
                    `${currentVal} 
                     ${newOperator}`;
              return newNumberFlag = true;
            }

            // complete equation
            if (itemArray.length) {
                itemArray.push(currentVal) // 3rd item in array

                const equationObj = {
                    num1: parseFloat(itemArray[0]),
                    op: itemArray[1],
                    num2: parseFloat(currentVal),
                    
                }

                equationArray.push(equationObj);
                const equationString =
                    `${equationObj['num1']} ${equationObj['op']} ${equationObj['num2']}`;
                
                
                const newValue = calculate(equationString, currentValueElem);
                

                previousValueElem.textContent =
                    `${newValue} ${newOperator}`;
                
                // Start new equation
                itemArray = [newValue, newOperator]
                newNumberFlag = true;
                console.log(equationArray);
            }
        });
    });

    const equalsButton = document.querySelector('.equals');
    equalsButton.addEventListener('click', () => {
        const currentVal = currentValueElem.value;
        let equationObj;

        // Pressing equals key repeatedly
        if (!itemArray.length && equationArray.length) {
            const lastEquation = equationArray[equationArray.length - 1];
            equationObj = {
                num1: parseFloat(currentVal),
                op: lastEquation.op,
                num2: lastEquation.num2
            }
        } else if (!itemArray.length) {
            return currentVal;
        } else {
            itemArray.push(currentVal);
            equationObj = {
                num1: parseFloat(itemArray[0]),
                op: itemArray[1],
                num2: parseFloat(currentVal)
            }
        }

        equationArray.push(equationObj);

        const equationString =
            `${equationObj['num1']} ${equationObj['op']} ${equationObj['num2']}`;
        
        calculate(equationString, currentValueElem);

        previousValueElem.textContent = `${equationString} =`;

        newNumberFlag = true;
        itemArray = [];
        console.log(equationArray)
    });

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
    allClearButton.addEventListener('click', () => {
        currentValueElem.value = 0;
        previousValueElem.textContent = '';
        itemArray = [];
    });

    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', () => {
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

document.addEventListener('DOMContentLoaded', initCalc);

const calculate = (equationString, currentValueElem) => {
    const regex = /(^[×÷=])|(\s)/g;
    equationString.replace(regex, '');
    const divByZero = /( \/ 0)/.test(equationString);
    if (divByZero) return currentValueElem.value =
        'Without comments...';
    
    return currentValueElem.value = Math.round((operate.expression(equationString)) * 100) / 100;
       
}

function Calculator() {
    this.methods = {
        '+': (a, b) => (a + b),
        '-': (a, b) => (a - b),
        '×': (a, b) => (a * b),
        '÷': (a, b) => (a / b),
     };

    this.expression = function (equationString) {
        let split = equationString.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        
        return this.methods[op](a, b);
    }
}

const operate = new Calculator;
