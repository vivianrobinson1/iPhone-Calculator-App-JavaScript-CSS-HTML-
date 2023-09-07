let input = "";

function appendInput(value) {
  input += value;
  updateDisplay(input);
}

function updateDisplay(value) {
  document.getElementById("display").value = value;
}

function clearDisplay() {
  input = "";
  updateDisplay("");
}

function calculate() {
  try {
    const result = eval(input);
    updateDisplay(result);
    input = String(result);
  } catch (error) {
    updateDisplay("Error");
    input = "";
  }
}
