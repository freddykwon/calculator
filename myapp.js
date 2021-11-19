const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (oper, inputNumber, b) => {
    let answer
    if (oper === "+") {
        answer = add(inputNumber, b);
    } else if (oper === "-") {
        answer = subtract(inputNumber, b);
    } else if (oper === "*") {
        answer = multiply(inputNumber, b);
    } else if (oper === "/") {
        answer = divide(inputNumber, b);
    }
    return answer;
}
const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".numBtns");
const signButtons = document.querySelectorAll(".funcBtns")


numButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        inputNumber(this.id);
    });
});

signButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        signFunc(this.id);
    });
})

let displayNumber;
parseInt(displayNumber);

// const inputNumber = number => {
//     displayNumber = display.innerHTML;
//     if (displayNumber.length < 16)
//         display.innerHTML = number;
//     return displayNumber;
// }
const inputNumber = number => {
    displayNumber = display.innerHTML;
    let n = 0;
    while (displayNumber.length < 16) {
        display.innerHTML = number;
        return displayNumber;
    }
}


const signFunc = sign => {
    let displaySign = display.innerHTML;
    display.innerHTML = sign;
    return displaySign;
}
