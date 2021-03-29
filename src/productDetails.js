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

let teste = productDetails('gel', 'giz')[0];
let testeDetalhes = teste.details.productId;
let proId = testeDetalhes.substr((productDetails('gel', 'giz')[0].details.productId.length - 3), 3);
console.log(testeDetalhes);
console.log(proId);
module.exports = productDetails;
