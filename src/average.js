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

const average = (param1) => {
const total = 0;
  if (typeof param1 !== 'object' || param1.lenght == 0) {
    return undefined;
  }
  else {
    for (let i = 0; i < param1.lenght; i++) {
      total += param1[i] / param1.length;
    }
    return total;
  }
};


module.exports = average;


//math.ceil() arredonda para cima e pode vir aq ser util