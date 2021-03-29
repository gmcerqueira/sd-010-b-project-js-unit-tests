/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (name, age) => {
  if (typeof (name) !== 'string' || typeof (age) !== 'number') {
    return undefined;
  }
  const workMessage = 'trabalho na Trybe e mando muito em programação!\n';
  return `'Oi, meu nome é ${name}!\nTenho ${age} anos,\n${workMessage}#VQV!'`;
};

module.exports = vqv;
