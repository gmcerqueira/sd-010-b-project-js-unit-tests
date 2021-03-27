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

const verificaArray = (array) => {
  // Verifico se a array não é vazia.
  if (array.length === 0) {
    return undefined;
  }

  // Verifico se todos os valores inseridos são números.
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
  }
};

const average = (array) => {
  if (verificaArray(array) === undefined) {
    return undefined;
  }
  // Faço as operações matematicas para obter a média.
  let mediaAritmetica;
  let somaTotal = 0;
  for (let i = 0; i < array.length; i += 1) {
    somaTotal += array[i];
    mediaAritmetica = somaTotal / array.length;
  }

  // Verifico se a média é um valor inteiro. Se for, retorno-a. Caso contrário, retorno seu valor arredondado.
  let resto = mediaAritmetica % 1;
  if (resto !== 0) {
    return Math.round(mediaAritmetica);
  }
  return mediaAritmetica;
};

module.exports = average;
