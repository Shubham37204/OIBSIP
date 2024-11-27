let expression = '';

function appendSymbol(symbol) {
  expression += symbol;
  document.getElementById('expression').innerText = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').innerText = result;
    expression = result.toString();
  } catch {
    document.getElementById('result').innerText = 'Error';
    expression = '';
  }
}

function clearAll() {
  expression = '';
  document.getElementById('expression').innerText = '';
  document.getElementById('result').innerText = '0';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  document.getElementById('expression').innerText = expression;
}
