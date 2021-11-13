const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (oper, a, b) => {
    let answer
    if (oper === "+") {
        answer = add(a, b);
    } else if (oper === "-") {
        answer = subtract(a, b);
    } else if (oper === "*") {
        answer = multiply(a, b);
    } else if (oper === "/") {
        answer = divide(a, b);
    }
    return answer;
}