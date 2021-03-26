/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  let aver = 0;

  for (let num of array) {
    if (typeof (num) !== 'number') {
      return undefined;
    }

    aver += num;
  }

  aver /= array.length;

  return Math.round(aver);
};

module.exports = average;
