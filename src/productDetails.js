/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const productDetails = (firstProduct, secondProduct) => [{
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
const outPut1 = (productDetails('Alcool gel', 'Máscara')[0].details.productId);
const outPut2 = (productDetails('Alcool gel', 'Máscara')[1].details.productId);
const teste1 = (outPut1) => {
  let newString1 = '';
  for (let index = (outPut1.length - 3); index <= outPut1.length - 1; index += 1) {
    newString1 += outPut1[index];
  }
  if (newString1 === '123') {
    return true;
  }
  return false;
};

const teste2 = (outPut2) => {
  let newStrng2 = '';
  for (let index = (outPut2.length - 3); index <= outPut2.length - 1; index += 1) {
    newStrng2 += outPut2[index];
  }
  if (newStrng2 === '123') {
    return true;
  }
  return false;
}

console.log(teste1(outPut1), teste2(outPut2))

module.exports = productDetails;
