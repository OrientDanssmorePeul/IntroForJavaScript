
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
})

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach(function(number , index , array) {
    console.log(`Number ${number} is at index ${index}`)
})

// This is an ES6 format
numbers.forEach(number => {
    console.log(number * 2);
})

// Map Concept
// It does something with the original array without 
// changing the original array, and assigns it to a 
// new variable

// SYNTAX
// const new Array = originalArray.map(callbackFunction)

const doublenumbers = numbers.forEach(number =>{
    return number * 2;
})
console.log(doublenumbers)
console.log(numbers)

