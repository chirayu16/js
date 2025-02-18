let inventory = [
    { name: 'Phone', price: 499, inStock: true },
    { name: 'Laptop', price: 999, inStock: false },
    { name: 'Tablet', price: 399, inStock: true }
  ];
// Scenario: Find all products from an inventory that are in stock and have a price less than $500.
let affordableInStock = inventory.filter( item => item.inStock == true && item.price < 500);
console.log(affordableInStock);

// Output: [{ name: 'Phone', price: 499, inStock: true }, { name: 'Tablet', price: 399, inStock: true }]

// 2.Mapping Over Objects to Extract or Transform Data

// Scenario: Create an array of product names from the inventory.

let productNames = inventory.map(item => item.name);
console.log(productNames);

// Finding a Specific Object
// Scenario: Find the first product with a price greater than $500.

let expensiveProduct = inventory.find(item => item.price > 500);
console.log(expensiveProduct);

// Reducing an Array of Objects
// Scenario: Calculate the total price of all items in stock.

let totalPrice = inventory.reduce((total, item) => item.inStock ? total + item.price : total, 0);
console.log(totalPrice);

// Sort products by price, lowest to highest.
let sortedByPrice = [...inventory]
sortedByPrice.sort((a,b) => a.price - b.price);
console.log(sortedByPrice);
console.log(inventory);