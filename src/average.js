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

const average = (props) => {
  //Verifica se o array não é vazio
  if (!props || props.length === 0) {
    return undefined;
  } else {
    // soma todos os itens do array
    const total = props.reduce((acumulador, valorAtual) => acumulador + valorAtual,0);
    //Verifica se o resultado é um numero
    return typeof total === "number"
      ? // Se for número ele retorna a divisão e arredonda
        Math.round(total / props.length)
      : // Se não for número ele retorna undefined
        undefined;
  }
};

module.exports = average;
