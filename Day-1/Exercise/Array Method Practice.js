const foods = ['pizza', 'sushi', 'nasi lemak','roti canai','ice cream'];
// push and pop
foods.push('laksa');
console.log(foods)
foods.pop();
console.log(foods)

// unshift and shift
foods.shift('pizza')
console.log(foods)
foods.unshift('cendol')
console.log(foods)

// splice
foods.splice(1, 1)
console.log(foods)

// slice
const firstthreeitems  = foods.slice(0, 3)
console.log(firstthreeitems)