// Get all the calculator keys
let keys = document.querySelectorAll('.calculator-key');

// Get the output display
let outputDisplay = document.querySelector('.calculator-output');

let currentInput = '0'; // Variable to store current input
let previousInput = '0'; // Variable to store previous input
let operator = null; // Variable to store the operator 

// Function to update the output dispaly
function updateOutPut(){
outputDisplay.textContent = currentInput;
}

// Function to handle number and decimal button clicks
function handleNumberClick(number) {
    if (currentInput === '0') {
      currentInput = number.toString();
    } else {
      currentInput += number.toString();
    }
    updateOutPut();
  }

// Function to handle operator button clicks
function handleOperatorClick(op) {
    if (operator !== null) {
        calculate();
        
    }
    previousInput = currentInput;
    currentInput = '0';
    operator = op;
}

// Function to handle calculation
function calculate() {
    let result;
    let prev = parseFloat(previousInput)
    let current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '0';
    updateOutPut();
}

// Function to handle clear button (AC)
function clearAll() {
    currentInput = '0';
    previousInput = '0';
    operator = null;
    updateOutPut();
    
}

// Function to handle the equals button (=)
function handleEquals() {
    calculate ();
}

// Add event listeners to all keys
keys.forEach(key =>{
    key.addEventListener('click', () => {
        if(key.classList.contains('calculator-key-operator')) {
            handleOperatorClick(key.textContent);
        } else if (key.textContent === '='){
            handleEquals();
        } else if (key.textContent === 'AC'){
            clearAll();
        } else {
            handleNumberClick(key.textContent);
        }
    });
});

// initial output display
updateOutPut();