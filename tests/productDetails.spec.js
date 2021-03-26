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
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(productDetails('teste1', 'teste2')), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('teste1', 'teste2').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    for (let item of productDetails('teste1', 'teste2')) {
      // assert.deepStrictEqual(typeof (item), 'object');
      assert.ok(typeof (item) === 'object' && !Array.isArray(item));
    }
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('teste1', 'teste2')[0], productDetails('teste', 'teste')[1])
    // (Difícil) Teste que os dois productIds terminam com 123.
    for (let item of productDetails('teste1', 'teste2')) {
      assert.notDeepStrictEqual(item.details.productId.search('123'), -1)
    }
  });
});
