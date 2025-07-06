
// Function: Add number/operator to the display

function appendToDisplay(value) {
  const display = document.querySelector('.current-operand');

  // If display shows '0', replace it with the new value
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    // Otherwise, add the value to the existing expression
    display.textContent += value;
  }
}


// Function: Clear the entire display

function clearDisplay() {
  const display = document.querySelector('.current-operand');
  display.textContent = '0'; // Reset to default
}


// Function: Delete the last entered character

function deleteLast() {
  const display = document.querySelector('.current-operand');
  const current = display.textContent;

  // Remove last character or reset to '0' if empty
  display.textContent = current.slice(0, -1) || '0';
}


// Function: Evaluate and show result

function calculateResult() {
  const display = document.querySelector('.current-operand');
  const expression = display.textContent;

  try {
    const result = eval(expression); //  Be cautious with eval in real apps
    display.textContent = result;
  } catch (error) {
    display.textContent = 'Error'; // Show error if expression is invalid
  }
}
