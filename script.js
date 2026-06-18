// Get the screen element
let screen = document.getElementById("screen");

// Add value to screen
function appendValue(value) {
  screen.value += value;
}

// Clear entire screen
function clearScreen() {
  screen.value = "";
}

// Delete last character
function deleteLast() {
  screen.value = screen.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
  try {
    // Evaluate the expression
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
}