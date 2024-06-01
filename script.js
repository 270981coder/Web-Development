let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    alert('Invalid calculation');
    clearDisplay();
  }
}

function clearallDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}
function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = 'Error';
}