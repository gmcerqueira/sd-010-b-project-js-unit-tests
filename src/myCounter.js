/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
<<<<<<< HEAD
  let newArray = [];
  for (let counter1 = 0; counter1 <= 3; counter1 += 1) {
    newArray.push(counter1);
    for (let counter2 = 2; counter2 <= 3; counter2 += 1) {
      newArray.push(counter2);
=======
  var myArray = [];
  for (var counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (var counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);
>>>>>>> e6034514f3ea8749d53d535c657d04f636428cbc
    }
  }
  return newArray;
};

module.exports = myCounter;
