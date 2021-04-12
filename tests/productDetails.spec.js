/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// exerccio realizado apos consultas aos sites devmedia, stackoverflow e o apoio do colega Trybe
// Henrique Clementino
const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(typeof productDetails(), 'object');
    assert.deepStrictEqual(productDetails.length, 2);
    assert.deepStrictEqual(typeof Object.keys(productDetails), 'object');
    assert.notDeepStrictEqual(productDetails()[0].name = 'A', productDetails()[1].name = 'B');
    const result = productDetails('Alcool', 'Máscara');
    assert.deepStrictEqual((result[0].details.productId).includes('123'), true);
    assert.deepStrictEqual((result[1].details.productId).includes('123'), true);
  });
});
