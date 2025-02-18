// Array methods 

// *push()

//Remember: Think of push as adding something to the back of a line.
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log('fruits:',fruits)

// *pop()

//Remember: pop is like removing someone from the end of a queue.
let cars = ['skoda', 'vw', 'toyota'];
cars.pop();
console.log('cars:',cars)

//shift()

//Remember: Removes and returns the first element of an array

let brands = ['hp','dell','apple'];
let firstBrand = brands.shift()
console.log(brands); //['dell', 'apple' ]
console.log(firstBrand); //hp

//unshift
// Remember: Unshifting is adding at the start, unlike push which adds at the end
let stup = ['set','get','put'];
stup.unshift('lal');
console.log(stup);

// slice()
// What it does: Returns a shallow copy of a portion of an array into a new array object.

let good_fruits = ['apple', 'banana', 'orange', 'pear'];
let citrus = good_fruits.slice(2, 4); // start at index 2, end before index 4
console.log(citrus);
//Remember: slice is like slicing a portion of a cake, without altering the original.

// splice()
// What it does: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

let all_fruits = ['apple', 'banana', 'orange', 'pear'];
// Remove 1 element at index 1 and insert 'grape' and 'kiwi'
all_fruits.splice(1, 1, 'grape', 'kiwi');
console.log(all_fruits); // ['apple', 'grape', 'kiwi', 'orange', 'pear']

// Remember: splice is like splicing in film, cutting out parts and adding new ones.


// map()
// What it does: Creates a new array with the results of calling a provided function on every element in this array.

let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
console.log(roots);

// filter()
// What it does: Creates a new array with all elements that pass the test implemented by the provided function.

let all_numbers = [1, 2, 3, 4, 5];
let even = all_numbers.filter(num => num % 2 === 0);
console.log(even);

// reduce()
// What it does: Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

let values = [1, 2, 3, 4]
let sum = values.reduce((acc, val) => acc + val, 0);
console.log(sum);

//forEach()
// What it does: Executes a provided function once for each array element.
let animals = ['cat','dog','bird'];
animals.forEach(animal => console.log(animal));

// some()
// What it does: Tests whether at least one element in the array passes the test implemented by the provided function.

let scores = [75, 48, 90, 85];
let somePassed = scores.some(score => score >= 90); //it stops when it finds one
console.log(somePassed); // true

// every()
// What it does: Tests whether all elements in the array pass the test implemented by the provided function.

let ages = [21, 25, 28, 30];
let allAdults = ages.every(age => age >= 18);
console.log(allAdults); // true

// find()
// What it does: Returns the value of the first element in the array that satisfies the provided testing function.

let products = [
    { name : 'phone', price: 49},
    { name: 'laptop', price: 100},
    { name: 'tablet', price: 149}
];
let find_expensiveItem = products.find( item => item.price > 49);
let filter_expensiveItem = products.filter( item => item.price > 49);
console.log(find_expensiveItem); // { name: 'laptop', price: 100 }
console.log(filter_expensiveItem);// [ // { name: 'laptop', price: 100 },{ name: 'tablet', price: 149 } ]

// findIndex()
// What it does: Returns the index of the first element in the array that passes the test implemented by the provided function.

let temperatures = [25, 30, 35, 20];
let hotIndex = temperatures.findIndex(temp => temp > 30 );
console.log(hotIndex); // 2

// flatMap()
// What it does: Maps each element using a mapping function, then flattens the result into a new array.

let words = ['Hello','World'];
//words.map(word => word.split('')).flat(); //same
let splitWords = words.flatMap(word => word.split(''));
console.log(splitWords); // ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']



