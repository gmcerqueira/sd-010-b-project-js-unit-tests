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

//VQV 
const checkArray = (array) => {
  let item = true;
  let size = true;
  for (let i = 0; i < array.length; i++) {
    if (typeof(array[i]) !== 'number') {
      item = false;
      break;
    }
  }
  if (array.length === 0) size = false;

  return item && size;
}

const average = (array) => {
  if (checkArray(array)) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return Math.round(sum/average.length);
  } else return undefined;
};

module.exports = average;
