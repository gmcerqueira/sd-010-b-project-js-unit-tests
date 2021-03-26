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

<<<<<<< HEAD
const average = (num) => {
  let sum = 0;

  if (num.length === 0) {
    return undefined;
  }

  for (let index = 0; index < num.length; index += 1) {
    if (typeof num[index] !== 'number') {
      return undefined;
    }
    sum += num[index];
  }

  const totalAverage = Math.round(sum / num.length);

  return totalAverage;
};
console.log(average([2, 2]))
=======
const average = (num) => { 
  let undefined = 'undefined'
  
  let soma = 0;  

  for(i = 0; i < num.length; i += 1) {
    if (typeof num[i] !== 'number'){
      soma = undefined
    }
    soma += num[i]

  }

  let total = soma / num.length;
  let end = Math.round(total)

  console.log(soma)
  console.log(total)
  console.log(end)
};

// average()




>>>>>>> b6d0c4db5c61b903de76a6166ad3e1d2f50ef7ac


module.exports = average;
