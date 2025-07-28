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

function divide(a,b) { // num2/num1
    let result = a/b;
    if (!(Number.isFinite(result)) && (initialDisplay > 0)) {
        return "Error! Cannot perform division by zero."
    } else {
        return a/b;
    }
}

// Display
let num1 = 0;
let num2 = 0;
let reset = true;
let once;

let initialDisplay = 0;
let lastOperator;

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
        once = 0;
        if (reset) { // Reset
            display.textContent = "";
            reset = false;
        }
        display.textContent = display.textContent + digitButton.textContent;
        num2 = parseInt(display.textContent);
        
    });
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent = 0;
    num1 = 0;
    num2 = 0;
    reset = true; 
    once;
    initialDisplay = 0;
    lastOperator;
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
   
   once++;
    if (once === 1 ) { 
        if(num1 == 0 && initialDisplay === 0) { // num1 == 0 is the initial screen display
            if (num2 == 0) {
                num2 = 1;
            } else {
                num1 = num2 * num2; //Ignore initial screen display
            }
            console.log(num1 = operate(parseInt(num1), parseInt(num2), "/"));
            reset = true;
            display.textContent = num1;
        } else {
            console.log(num1 = operate(parseInt(num1), parseInt(num2), lastOperator));
            reset = true;
            display.textContent = num1;
        }
        
    }

    lastOperator = "/";
    initialDisplay++;
});
multiplyButton.addEventListener("click", () => {
    
    once++;
    if (once === 1 ) { 
        if(num1 == 0 && initialDisplay === 0) { // num1 == 0 is the initial screen display
            num1 = 1;
            console.log(num1 = operate(parseInt(num1), parseInt(num2), "*"));
            reset = true;
            display.textContent = num1;
        } else {
            console.log(num1 = operate(parseInt(num1), parseInt(num2), lastOperator));
            reset = true;
            display.textContent = num1;
        }
        
    }

    lastOperator = "*";
    initialDisplay++;
});
subtractButton.addEventListener("click", () => {
    
    once++;
    if (once === 1) {
        if(initialDisplay === 0) { // Initial screen display
            console.log(num1 = operate(parseInt(num1), parseInt(num2), "-"));
            reset = true;
            display.textContent = num1;
        } else {
            console.log(num1 = operate(parseInt(num1), parseInt(num2), lastOperator));
            reset = true;
            display.textContent = num1;
        }
    }
    lastOperator = "-";
    initialDisplay++;
});
addButton.addEventListener("click", () => {
    
    once++;
    if (once === 1) {
        if(initialDisplay === 0) { // Initial screen display
            console.log(num1 = operate(parseInt(num1), parseInt(num2), "+"));
            reset = true;
            display.textContent = num1;
        } else {
            console.log(num1 = operate(parseInt(num1), parseInt(num2), lastOperator));
            reset = true;
            display.textContent = num1;
        }
    }


    lastOperator = "+";
    initialDisplay++;
});

const operateButton = document.querySelector("#operate");
operateButton.addEventListener("click", () => {
    once++;
    if (once === 1) {
        console.log(num1 = operate(parseInt(num1), parseInt(num2), lastOperator));
        reset = true;
        display.textContent = num1;
    }    
});

