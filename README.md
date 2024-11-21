Exercício que envolve criar um programa simples que trabalha com variáveis, condições e funções.

**Objetivo:** Escrever um programa em JavaScript que peça ao usuário um número e exiba na tela se o número é "par" ou "ímpar".

### Passo a Passo:

1. **Obter um Número do Usuário**: Solicite ao usuário que insira um número. Usar o `prompt()` para isso, como `const numero = prompt("Digite um número:");`.
2. **Converter para Número Inteiro**: Garanta que o valor é tratado como um número usando `parseInt()`.
3. **Escrever uma Função**: Criar uma função `verificarParOuImpar(numero)` que verifique se o número é par ou ímpar.
4. **Estrutura Condicional**: Dentro da função, utilizar um `if...else` para checar se o número é divisível por 2.
5. **Exibir Resultado**: Mostrar na tela se o número é "par" ou "ímpar" usando `console.log()`.

### Código de Exemplo:

```javascript
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + ' é par.');
  } else {
    console.log(numero + ' é ímpar.');
  }
}

const numero = parseInt(prompt('Digite um número:'));
verificarParOuImpar(numero);
```