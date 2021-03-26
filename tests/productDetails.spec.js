/* eslint-disable max-len*/
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
    // assert.fail();
    assert.strictEqual(
      Array.isArray(productDetails('iphone', 'celular')),
      true
    );

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('iphone', 'celular').length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('iphone', 'celular'), 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(
      productDetails('iphone', 'celular')[0],
      productDetails('iphone', 'celular')[1]
    );

    // (Difícil) Teste que os dois productIds terminam com 123.
    const product1 = productDetails(
      'iphone',
      'celular'
    )[0].details.productId.slice(-3);

    const product2 = productDetails(
      'iphone',
      'celular'
    )[1].details.productId.slice(-3);

    assert.strictEqual(product1, product2, '123');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
