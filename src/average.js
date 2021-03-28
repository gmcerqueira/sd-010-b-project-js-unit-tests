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
  // condição para verificarse o array está vazio ou é nullo
  if (array === null || array.length === 0) { return true; }
  // condição para verificar se o elemento da string não é um número
  for (const numbers in array) {
    if (typeof array[numbers] !== 'number') { return true; }
  }
  return false;
};

const average = (array) => {
  // Caso a função receba algum valor não númerico ou um array vazio
  if (arrayNumber(array)) { return undefined; }
  // variável para pegar o comprimeto do array
  const arrayChar = array.length;
  // variave para somar
  let sum = 0;
  // consição que fará a soma dos elementos dentro de array
  for (let numberArray = 0; numberArray < array.length; numberArray += 1) {
    sum += array[numberArray];
  }
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  // A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.
  return Math.round(sum / arrayChar);
};

module.exports = average;
