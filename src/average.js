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
  let med = 0;
  let count = 0;
  if (array.length === 0) {
    return undefined;
  }  
  for (let arr = 0; arr < array.length; arr += 1) {
     if (typeof array[arr] !== 'number') {
      return undefined;
    
    } 
    count += array[arr];
  //   med = count / array.length
   };
   med = count / array.length
   return Math.round(med);
};
// console.log(average[4, 6]);
  
 module.exports = average;
