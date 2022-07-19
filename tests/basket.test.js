const {
  scanItem,
  addItemToBasket,
  basket,
  getBasketTotal,
  removeItemFromBasket,
} = require("../basket");

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
const items = [apple, banana, orange, pineapple, kiwi];

//jest
describe("Shopping Basket", () => {
  //test scenarios
  it("should scan an item barcode and return matching items", () => {
    const resultItem = scanItem(456); // exercise step
    // .toBe matcher is used for primitive data types (number string boolen).
    // .toEqual matcher is used for complex datatypes  objects and arrays
    expect(resultItem).toEqual(banana); // verification
  });

  it("should add an item to the basket", () => {
    addItemToBasket(banana);
    expect(basket).toContain(banana);
  });

  it("should calculate the total price of all items in the basket", () => {
    addItemToBasket(kiwi);
    const total = getBasketTotal();
    expect(total).toBe(31); // banana + kiwi
  });

  it("should remove an item from the basket", () => {
    removeItemFromBasket(banana);
    expect(basket).not.toContain(banana);
  });
});
