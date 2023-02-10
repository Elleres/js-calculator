var inputString = "";
var firstOperand = 0;
var secondOperand = 0;
var result = "";
var operation = "";
var presentOperator;

const clear = document.querySelectorAll(".clear");
const screen = document.querySelector(".screen");
const buttonsNum = document.querySelectorAll(".buttonNum");
const buttonsCalc = document.querySelectorAll(".buttonCalc");
const downNumber = document.querySelector(".downNumber");
const upNumber = document.querySelector(".upNumber");
const operator = document.querySelector(".operation")

buttonsNum.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id != "dot") {
            inputString += button.id.toString();
        } else if (!inputString.includes(".")) {
            inputString += ".";
        }
        if (inputString.length < 25) {
            downNumber.textContent = `${inputString}`;
        } else {
            alert("max number size");
        }

    })
})

clear.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id == "clear") {
            inputString = "";
            operator.textContent = "";
            upNumber.textContent = "";
            downNumber.textContent = `${inputString}`;
        } else {
            inputString = inputString.slice(0, inputString.length - 1);
            downNumber.textContent = `${inputString}`;
        }
    })
})

buttonsCalc.forEach(button => {
    button.addEventListener("click", () => {
        operator.textContent = button.innerHTML;
        if (button.id != "equals") {
            firstOperand = downNumber.textContent
            upNumber.textContent = downNumber.textContent;
            downNumber.textContent = "";
            inputString = "";
            presentOperator = button.innerHTML;
        } else {
            secondOperand = downNumber.textContent
            upNumber.textContent += presentOperator + downNumber.textContent
            downNumber.textContent = parseInt(firstOperand) + parseInt(secondOperand)
        }
    })
})

