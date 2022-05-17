let previousValue = document.querySelector('[data-previous__value]'),
    currentValue = document.querySelector('[data-current__value ]');
const clearButton = document.querySelector('[data-clear]'),
    deleteButton = document.querySelector('[data-delete]'),
    equalsButton = document.querySelector('[data-equals]'),
    numberButtons = document.querySelectorAll('[data-number]'),
    operationButtons = document.querySelectorAll('[data-operation]');


let expression = '',
    finish = false;


//clear

function clear() {
    expression = '';
    operator = '';
    currentValue.textContent = 0;
}

clearButton.addEventListener('click', clear);

// Delete
deleteButton.addEventListener('click', () => {
    if (currentValue.textContent !== '0') {
        currentValue.textContent = currentValue.textContent.slice(0, -1);
    }
})


//Numbers
numberButtons.forEach(element => {

    element.addEventListener('click', () => {

        expression += element.textContent;
        currentValue.textContent = expression;
    })

})

// Operations
operationButtons.forEach(element => {

    element.addEventListener('click', () => {
        expression += element.textContent;
        currentValue.textContent = expression;
    })
})


equalsButton.addEventListener('click', () => {
    previousValue.textContent = eval(expression);

})