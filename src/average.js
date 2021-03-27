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

const average = (array) => {
  if (array !== 'number' || array === null){
    throw new Error('É esperado um array, que seja somente do tipo number')
  }
  let dividendo = array.length;
  let sum = array;
  let sumArr = 0;
  for (let i = 0; i < array.length; i++) {
    sumArr = sumArr + sum[i];
  }
  sumArr = Math.round(sumArr/dividendo);
  return sumArr;
}

module.exports = average;
