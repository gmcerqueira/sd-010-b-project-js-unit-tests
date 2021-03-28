// const createMenu = (object) => ({
//     fetchMenu: () => object,
//     consumption: [],
//     order: (string) => {
//         addOrder(string);
//       },
//     pay: () => {
//         totalOfOrder();
//     }
//   });
  
//   const objetoRetornado = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });

//   const addOrder = (string) => {
//     objetoRetornado.consumption.push(string);
//   }
  
//   objetoRetornado.order('coxinha')
//   console.log(objetoRetornado.consumption)
//   objetoRetornado.order('sopa')

//   const totalOfOrder = () => {
//     let total = 0
//     const order = objetoRetornado.consumption;
//     // console.log(order)
//     const menu  = objetoRetornado.fetchMenu();
//     // console.log(menu)
//     for(key in order) {
//       // console.log(key)
//       for (key2 in menu) {
//         // console.log(menu[key2])
//         for (key3 in menu[key2]) {
//           // console.log(key3)
//           if (order[key] === key3) {
//             // console.log(order[key])
//             // console.log(menu[key2][key3])
//             total += menu[key2][key3];
//           }
//         }
//       }
//     }
//     total *= 1.1;
//     total = parseFloat(total.toPrecision(4));
//     console.log(total);
//   }

//  totalOfOrder()

// const objetoRetornado = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
// console.log(objetoRetornado.fetchMenu())
// objetoRetornado.order('coxinha')
// console.log(objetoRetornado.consumption)
// objetoRetornado.pay()
  