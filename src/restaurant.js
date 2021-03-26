
const obj = {
  food: { coxinha: 3.9, sopa: 9.9 },
  drink: { agua: 3.9, cerveja: 6.9 },
};

function orderFromMenu(value) {

  return this.consumption.push(value);
}

const createMenu = (obj) => {
  let result = 0;

  const menu = {
    fetchMenu: () => obj,

    consumption: [],
    order: orderFromMenu,
    pay: function () {
      for (let item of this.consumption) {
        if (obj.drink[item]) {
          result += obj.drink[item];
        } else if (obj.food[item]) {
          result += obj.food[item];
        }
      }
      return result + (10 * result) / 100;
    },
  };
  return menu;
};
module.exports = createMenu;
