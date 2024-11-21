document.getElementById('button').addEventListener('click', function () {
  const numero = parseInt(document.getElementById('number').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(numero)) {
    resultDiv.textContent = 'Por favor, digite um número válido';
  } else if (numero % 2 === 0) {
    resultDiv.textContent = numero + ' é par';
  } else {
    resultDiv.textContent = numero + ' é ímpar';
  }
});
