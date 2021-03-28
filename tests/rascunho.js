// const addOrder = (string) => {
//   objetoRetornado.consumption.push(string);
// };

// const totalOfOrder = () => {
//   let total = 0;
//   const order = objetoRetornado.consumption;
//   const menu = {};
//   Object.assign(menu, objetoRetornado.fetchMenu().food, objetoRetornado.fetchMenu().drinks);
//   for (let key in order) {
//     if (menu[order[key]] !== undefined) {
//       total += menu[order[key]];
//     }
//   }
//   total *= 1.1;
//   total = parseFloat(total.toPrecision(4));
//   console.log(total);
// };

// const createMenu = (object) => ({
//   fetchMenu: () => object,
//   consumption: [],
//   order: (string) => {
//     addOrder(string);
//   },
//   pay: () => {
//     totalOfOrder();
//   },
// });

// const objetoRetornado = createMenu({
//   food: {'coxinha': 3.90, 'sanduiche': 9.90},
//   drinks: {'agua': 3.90, 'cerveja': 6.90}
// });
// objetoRetornado.order('coxinha')
// // console.log(objetoRetornado.consumption)
// objetoRetornado.pay();
