const assert = require('assert')
let array = [ 
  {
    name: 'Alcool gel',
    details: {
      productId: 'Alcool gel123'
    }
  },
  {
    name: 'Máscara',
    details: {
      productId: 'Máscara123'
    }
  }
]

console.log(typeof(array))

const firstProductId = array[0].details.productId;
const endFirstProduct = firstProductId[firstProductId.length -3] + firstProductId[firstProductId.length -2] + firstProductId[firstProductId.length -1]
console.log(endFirstProduct)
const secondProductId = array[1].details.productId;
const endSecondProduct = secondProductId[secondProductId.length -3] + secondProductId[secondProductId.length -2] + secondProductId[secondProductId.length -1];
assert.deepStrictEqual(endFirstProduct,'123');
assert.deepStrictEqual(endSecondProduct,'123');

