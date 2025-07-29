const display = document.getElementById('display');
let currentInput = '';
let resultDisplayed = false;

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');

    if (btn.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
      resultDisplayed = false;
      return;
    }

    if (btn.id === 'equals') {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    if (resultDisplayed && !isNaN(value)) {
      currentInput = value;
      resultDisplayed = false;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});
