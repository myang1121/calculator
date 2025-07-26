// Math operators function
function add(a,b) {
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

// Display
let num1 = 0;
let operator;
let num2;

function operate(num1, num2, operator) {
    if(operator === "+") {
        return add(num1, num2);
    } else if(operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

// Populate display
const digitButtons = document.querySelectorAll(".digitButton > button");
const display = document.querySelector("#display");

digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        if (display.textContent == 0) {
            display.textContent = digitButton.textContent;
        } else {
            display.textContent += digitButton.textContent;
        }
        num2 = display.textContent;
        
    });
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = 0;
    num1 = 0;
    num2 = 0;
}); 

const signButton = document.querySelector("#sign");
signButton.addEventListener("click", () => {
    display.textContent *= -1;
});

const percentButton = document.querySelector("#percent");
percentButton.addEventListener("click", () => {
    display.textContent /= 100;
});

const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");

divideButton.addEventListener("click", () => {
    
   
});
multiplyButton.addEventListener("click", () => {
});
subtractButton.addEventListener("click", () => {
});
addButton.addEventListener("click", () => {
    
    display.textContent = num1;
});

