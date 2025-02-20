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
//output: [ 'Phone', 'Laptop', 'Tablet' ]

// Finding a Specific Object
// Scenario: Find the first product with a price greater than $500.

let expensiveProduct = inventory.find(item => item.price > 500);
console.log(expensiveProduct);
// Output:{ name: 'Laptop', price: 999, inStock: false }


// Reducing an Array of Objects
// Scenario: Calculate the total price of all items in stock.

let totalPrice = inventory.reduce((total, item) => item.inStock ? total + item.price : total, 0);
console.log(totalPrice);
//898

// Sort products by price, lowest to highest.
let sortedByPrice = [...inventory]
sortedByPrice.sort((a,b) => a.price - b.price);
console.log(sortedByPrice);
//output
// [
//     { name: 'Tablet', price: 399, inStock: true },
//     { name: 'Phone', price: 499, inStock: true },
//     { name: 'Laptop', price: 999, inStock: false }
//   ]

// Updating Objects in an Array
// Scenario: Increase the price of all items by 10%.
let updatedPrice = inventory.map(item => ({
    ...item,
    price: item.price * 1.1
}));
console.log(updatedPrice);
[
    { name: 'Phone', price: 548.9000000000001, inStock: true },
    { name: 'Laptop', price: 1098.9, inStock: false },
    { name: 'Tablet', price: 438.90000000000003, inStock: true }
  ]
//above is similar to
let Price = inventory.map(function(item) {
    return {
        ...item,
        price: item.price * 1.1
    }
});
console.log(Price);

let priceUpdated = [];
for(let item of inventory) {
    priceUpdated.push({...item, price: item.price * 1.1});
}
console.log(priceUpdated);

// Grouping Objects
// Scenario: Group products by whether they are in stock or not.

let groupedByStock = inventory.reduce((groups, item) => {
    const key = item.inStock ? 'instock' : 'outofStock';
    if(!groups[key]) groups[key] = [];
    groups[key].push(item);
    return groups;
}, {});
console.log(groupedByStock);
// {
//     instock: [
//       { name: 'Phone', price: 499, inStock: true },
//       { name: 'Tablet', price: 399, inStock: true }
//     ],
//     outofStock: [ { name: 'Laptop', price: 999, inStock: false } ]
//   }


const data = [
    {
        id: 1,
        name: "Alice",
        age: 28,
        isActive: true,
        address: {
            city: "New York",
            zip: "10001",
            coordinates: { lat: 40.7128, lng: -74.0060 }
        },
        hobbies: ["Reading", "Hiking", "Gaming"],
        transactions: [
            { id: "t1", amount: 200.5, type: "credit", date: "2024-02-15" },
            { id: "t2", amount: 150.75, type: "debit", date: "2024-02-18" }
        ]
    },
    {
        id: 2,
        name: "Bob",
        age: 35,
        isActive: false,
        address: {
            city: "San Francisco",
            zip: "94105",
            coordinates: { lat: 37.7749, lng: -122.4194 }
        },
        hobbies: ["Cooking", "Cycling"],
        transactions: [
            { id: "t3", amount: 500.0, type: "credit", date: "2024-02-10" },
            { id: "t4", amount: 100.0, type: "debit", date: "2024-02-12" },
            { id: "t5", amount: 50.25, type: "debit", date: "2024-02-14" }
        ]
    },
    {
        id: 3,
        name: "Charlie",
        age: 22,
        isActive: true,
        address: {
            city: "Chicago",
            zip: "60601",
            coordinates: { lat: 41.8781, lng: -87.6298 }
        },
        hobbies: ["Photography", "Traveling", "Music"],
        transactions: []
    }
];
//Filter active users

const dataFilter = (users) => users.filter(user => user.isActive)
// console.log(dataFilter(data));

//Find the oldest user

const oldestUser = (users) => { return users.reduce((oldestUser, val) => {
    return oldestUser.age > val.age ? oldestUser : val
})}
// console.log(oldestUser(data));

//each user's total transactions

const trans_total_each_user = (users) => users.map(user => ({
    name : user.name,
    totalTransactions: user.transactions.reduce((curr, val) => curr + val.amount, 0)})
);
// console.log(trans_total_each_user(data));
const trans = data.map(user => ({
    user : user.name,
    total: user.transactions.reduce((curr, val) => curr + val.amount, 0)
}));
// console.log(trans);

//sort by hobbies

const hobbies = (users) => [...users].sort((a,b) => b.hobbies.length - a.hobbies.length );
console.log(hobbies(data))

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

console.log(isPalindrome('ll'));

