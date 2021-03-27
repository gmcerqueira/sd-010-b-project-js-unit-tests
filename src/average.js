/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const arrayNumber = (array) => {
  // iniciando o projeto em 26/03
  if (array === null || array.length === 0) { return true; }
  for (const numbers in array) {
    if (typeof array[numbers] !== 'number') { return true; }
  }
  return false;
};
const average = (array) => {
  if (arrayNumber(array)) { return undefined; }
  const arrayChar = array.length;
  let sum = 0;
  for (let numberArray = 0; numberArray < array.length; numberArray += 1) {
    sum += array[numberArray];
  }
  return Math.round(sum / arrayChar);
};

module.exports = average;
