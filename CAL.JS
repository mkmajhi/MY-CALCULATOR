// Append characters like numbers/operators to the display
function appendToDisplay(value) {
  const display = document.querySelector('.current-operand');
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

// Clear the display
function clearDisplay() {
  document.querySelector('.current-operand').textContent = '0';
}



function deleteLast() {
  const display = document.querySelector('.current-operand'); 
  let current = display.textContent;                         
  display.textContent = current.slice(0, -1) || '0';         
}



// Calculate the result
function calculateResult() {
  const display = document.querySelector('.current-operand');
  try {
    const expression = display.textContent;
    const result = eval(expression); // 
    display.textContent = result;
  } catch (error) {
    display.textContent = 'Error';
  }
}
