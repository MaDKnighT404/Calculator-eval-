// in this code i use eval() method, but it is strongly discouraged!
// eval() method is very vulnerable to hackers!!!
// NEVER use it in real project

let previousValue = document.querySelector('[data-previous__value]'),
    currentValue = document.querySelector('[data-current__value ]');
const clearButton = document.querySelector('[data-clear]'),
    deleteButton = document.querySelector('[data-delete]'),
    equalsButton = document.querySelector('[data-equals]'),
    numberAndOperationButtons = document.querySelectorAll('[data-number-oper]');

let expression = ''; // this variable contains an expression that will be evaluated later. String type
//clear
function clear() { // function for clear all outputs and expression variable
    expression = '';
    currentValue.textContent = '0';
    previousValue.textContent = '';
}
clearButton.addEventListener('click', clear); // add eventListener for button "C". It is clear all outputs and expression variable

// Expression
numberAndOperationButtons.forEach(element => { // iterating over a pseudo-array 
    element.addEventListener('click', () => { // add eventListener for all buttons who contain numbers and operations (include '.')
        if (/\D/.test(element.textContent)) { // if element contain not a digit
            expression += element.textContent; // add this element-textcontent to variable "expression"
            currentValue.textContent = expression // add this "expression" to output "currentValue"
            if (isNaN(expression[expression.length - 2])) { // if second to last character is not a number (+-/.*)
                expression = currentValue.textContent.slice(0, -1) // then delete last character of "expression"
                expression = expression.replace(/.$/, `${element.textContent}`); // and replace last character of "expression" to pushing buttons-textContent
                currentValue.textContent = expression; // put the result in "currentValue"
                if (expression == '') { // for the start, if expression did't contain anything
                    currentValue.textContent = '0'; // output 0 to "currentValue"
                }
            }
        } else { // if element contain anything else ( like a number )
            expression += element.textContent; // just add textContent of element to "expression"
            currentValue.textContent = expression // and bring this epxression to "currentValue"
        }
    })
})

// Delete
deleteButton.addEventListener('click', () => {
    expression = currentValue.textContent.slice(0, -1);
    currentValue.textContent = expression;
    if (expression == '') { // if expression is empty
        currentValue.textContent = '0'; // set currentValue
    }
})

// equals
equalsButton.addEventListener('click', () => {
    if (isNaN(expression[expression.length - 1])) { // if last character in "expression" is a operation (+-/.*)
        expression = expression.slice(0, -1); // delete last character in "expression"
        currentValue.textContent = expression; // put the result in "currentValue"
    } else {
        previousValue.textContent = `= ${eval(expression)}`; // output the result of the expression to "previousValue"
        expression = '' // clear expression
        currentValue.textContent = '0'; // and set 0 to "currentValue"
    }

    if (previousValue.textContent == '= Infinity') {
        previousValue.textContent = 'cannot be divided by 0'
    }

})