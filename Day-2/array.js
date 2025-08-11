const fruits = ['apple', 'mango'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Push - Adds one or more elements to the end of the array
fruits.push("banana")
console.log(fruits)

// Pop - Removes the last element from the array
fruits.pop()
console.log(fruits)

// Unshift - Adds one or more elements to the beginning of the array
fruits.unshift("orange")
console.log(fruits)

// Shift - Removes the first element from the array
fruits.shift()
console.log(fruits)

// Splice - Adds, Remove or Replace elements in the array
fruits.splice(1,1)  // remove the second element
console.log(fruits)

fruits.splice(1,0, "durian") //adds an element at the second position
console.log(fruits) 

fruits.splice(1,1, "rambutan") //replace the element at the second position
console.log(fruits)


let vegetables = ['carrot', 'broccoli', 'spinach'];
vegetables.splice(2,2)
console.log(vegetables)

vegetables.splice(1,0,"cabbage")
console.log(vegetables)


// Slice - Returns a shallow copy of a portion of an array into a new array object
let carBrands = ['Toyota', 'Honda', 'Nissan', 'Subaru', 'Mazda'];

const firstthreecarbrands = carBrands.slice(0, 3); // Show Index 0 To 2
console.log(firstthreecarbrands)

const lasttwocarbrands = carBrands.slice(3); // Start From Index 3 To end
console.log(lasttwocarbrands)

const lastthreecarbrands = carBrands.slice(2); // Start From Last 2 Elements
console.log(lastthreecarbrands)

const middlethreecarbrands = carBrands.slice(1, 4); //show Index 1 To 3
console.log(middlethreecarbrands)

const middleendcarbrands = carBrands.slice(2, 4);
console.log(middleendcarbrands)


