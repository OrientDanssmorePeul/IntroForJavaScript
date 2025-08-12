// the .find function
/*
const numbers = [1, 3, 5, 6, 7, 9];

const firstEven = numbers.find(function(number) {
    return number % 2 === 0;
});

console.log(firstEven); // Output: 6

const firstOdd = numbers.find(function(number) {
    return number % 2 === 1;
});

console.log(firstOdd); 
console.log(4553 % 2)


const numberss = [1, 3, 5, 6, 7, 9];

const firstEvenIndex = numbers.findIndex(function(number) {
    return number % 2 === 0;
});

console.log(firstEvenIndex); // Output: 3

const firstOddIndex = numbers.findIndex(function(number) {
    return number % 2 === 1;
})

console.log(firstOddIndex);
*/

// the .filter function

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]


const oddNumbers = numbers.filter(function(number) {
    return number % 2 === 1 && number < 5;
});

console.log(oddNumbers); // Output: [1, 3, 5]

// the .some function
const fruits = ["apple", "banana", "orange", "pear"];

const hasBanana = fruits.some(function(fruit) {
    return fruit === "banana";
});

console.log(hasBanana); // Output: true

// using.concat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const array4 = [10, 11, 12];
const newArray = array1.concat(array2, array3, array4);

const newArrays = [...array1, ...array2, ...array3, ...array4];

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, etc...]

console.log(newArrays); // Output: [1, 2, 3, 4, 5, 6, etc...]

// using .string and .join
const myArray = ['apple', 'banana', 'cherry'];
const myString = myArray.toString();
console.log(myString); // Output: "apple,banana,cherry"


const myArray2 = ['apple', 'banana', 'cherry'];
const myString2 = myArray.join('&');
console.log(myString2); // Output: "apple-banana-cherry"
