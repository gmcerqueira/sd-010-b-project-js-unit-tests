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

const average = (numeros) => {

     if(numeros.length === 0){
       return undefined;
     }
     else{
       for(let i = 0; i < numeros.length; i += 1){
         if(typeof numeros[i] !== 'number'){
           return undefined;
           break;
         }
       }
     }

  // array.reduce(armazenador e valor serão somados começando de 0)
  //apelei e usei reduce
  let total = numeros.reduce((total, numero) => total + numero, 0);

  return Math.round(total/numeros.length);
};

module.exports = average;
