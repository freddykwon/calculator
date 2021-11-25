const calculator = document.querySelector("#calculator");
const keys = calculator.querySelector(".calculatorKeys");
const allClear = calculator.querySelector('[data-action=allClear');
const clearEntry = calculator.querySelector('[data-action=clearEntry');

//add event listener for all buttons 
keys.addEventListener("click", e => {
    if (e.target.matches('button')) {
        const displayNum = display.textContent;
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const previousKeyType = calculator.dataset.previousKeyType

        // function createResultString() {
        // numbers
        if (!action) {
            if (displayNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
        }

        //decimal 
        if (action === 'decimal') {
            if (!displayNum.includes('.')) {
                display.textContent = displayNum + '.'
            } else if (
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }

        //operators 
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            // button is depressed when clicking any action buttons
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayNum;
            if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                const calcValue = calculate(operator, firstValue, secondValue)
                display.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
            } else {
                calculator.dataset.firstValue = displayNum;
            }
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
            //add custom attribute when operator button is clicked
            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))
        }

        //calculate or equal button
        if (action === 'calculate') {
            // calculator.dataset.previousKeyType = 'operator';
            firstValue = calculator.dataset.firstValue;
            operator = calculator.dataset.operator;
            secondValue = displayNum;

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayNum;
                    secondValue = calculator.dataset.modValue;
                }
                display.textContent = calculate(operator, firstValue, secondValue)
            }
            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
        }


        //clear buttons
        if (action === 'allClear') {
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = '';
                calculator.dataset.modValue = '';
                calculator.dataset.operator = '';
                calculator.dataset.previousKeyType = '';
            }
            display.textContent = 0;
            calculator.dataset.previousKeyType = 'clear';
        }
        if (action === 'clearEntry') {
            if (key.textContent === 'CE') {
                calculator.dataset.previousKeyType = '';
            }
            display.textContent = 0;
            calculator.dataset.previousKeyType = 'clear';
        }
    }
    // }
});


//calculate function
const calculate = (operator, a, b) => {
    let answer = '';
    if (operator === "add") {
        answer = parseFloat(a) + parseFloat(b);
    } else if (operator === 'subtract') {
        answer = parseFloat(a) - parseFloat(b);
    } else if (operator === "multiply") {
        answer = parseFloat(a) * parseFloat(b);
    } else if (operator === "divide") {
        answer = parseFloat(a) / parseFloat(b);
    }
    return answer;
}

//to do 
//add keyboard clicks to application
