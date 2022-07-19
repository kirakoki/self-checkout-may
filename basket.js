// example data

const orange = {
  barcode: 789,
  price: 7,
};
const pineapple = {
  barcode: 5367,
  price: 80,
};
const kiwi = {
  barcode: 765,
  price: 25,
};
const apple = {
  barcode: 123,
  price: 5,
};

const banana = {
  barcode: 456,
  price: 6,
};

//example product catalogue
const catalogue = [apple, banana, orange, pineapple, kiwi];
const basket = [];

function scanItem(barcodeNumber) {
  // look at the catlaogue
  // find the matching barcode
  // return the matching item object

  // producedural style
  /*for ( loop thru the items array) {
        if(item["barcode"]=== barcodeNumber){
            return true
        }
    } */

  //functional style
  const found = catalogue.find((item) => {
    if (item.barcode === barcodeNumber) {
      return true;
    }
  });
  return found;
}

function addItemToBasket(item) {
  //item obj will be provided in the argument
  //it will be added to the basket array
  return basket.push(item);
}

function getBasketTotal() {
  console.log(basket);
  //functional method

  //   return basket.reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue.price;
  //   }, 0);

  //procedural method
  let total = 0;
  for (let item of basket) {
    total = total + item.price;
  }
  return total;
}

function removeItemFromBasket(productToRemove) {
  //  find the index of the matching product
  // remove it from the basket array (splice method)
  const indexToRemove = basket.indexOf(productToRemove);
  return basket.splice(indexToRemove, 1);
}

module.exports = {
  scanItem,
  addItemToBasket,
  basket,
  getBasketTotal,
  removeItemFromBasket,
};
