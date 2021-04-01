/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

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
    // ESCREVA SEUS TESTES ABAIXO:
    // OBS: O último teste(teste mais difícil) eu só consegui entender a resolução com a ajuda do meu colega Alexandre Damasceno.  Link do PR dele:https://github.com/tryber/sd-010-b-project-js-unit-tests/pull/132/commits/14379b19ba4ce958c6de19905a41d46767c92792
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (productDetails('firstProduct', 'secondProduct')), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.entries(productDetails('firstProduct', 'secondProduct')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productDetails('firstProduct', 'secondProduct')), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails('one', 'two'), productDetails('one', 'two'));
    // (Difícil) Teste que os dois productIds terminam com 123.
    let firstId = productDetails('one', 'two')[0].details.productId.split('');
    let secondId = productDetails('one', 'two')[1].details.productId.split('');
    let firstKey = `${firstId[firstId.length - 3]}${firstId[firstId.length - 2]}${firstId[firstId.length - 1]}`;
    let secondKey = `${secondId[secondId.length - 3]}${secondId[secondId.length - 2]}${secondId[secondId.length - 1]}`;
    assert.strictEqual(firstKey === '123' && secondKey === '123', true);
  });
});
