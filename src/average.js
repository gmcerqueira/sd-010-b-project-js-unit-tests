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

const average = () => {
  // iniciando o projeto em 26/03
  if (average !== 'number' || average === 0) {
    return undefined;
  }
  let resultado = 0;
  for (let index = 0; index <= average; index += 1) {
    resultado += average[index];
  }
  return Math.floor(resultado / average.length);
};
    assert.strictEqual(average([3, 4, 5]), 4);
    assert.strictEqual(average([1, 2, 3, '4', 5]), undefined);
    assert.strictEqual(average([0, 0, 0, 0, 0, 0, 0]), 0);
    assert.strictEqual(average([1, 2, '3']), undefined);
    assert.strictEqual(average([1, 2, 3]), 2);
    assert.strictEqual(average([0, 0, 0, 0, 0, 0, 1]), 0);

    assert.strictEqual(average([]), undefined);
    assert.strictEqual(average([' ']), undefined);
    assert.strictEqual(average(['um', 'dois', 'tres']), undefined);
    assert.strictEqual(average([47, 63, 122]), 77);

    assert.strictEqual(average([-11, 2, 5]), -1);

    assert.strictEqual(average([-11, -5, 2]), -5);

module.exports = average;
console.log(average);
