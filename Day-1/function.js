function sayHello(name, age) {
  return "Hello my name is " + name + " and I am " + age + " years old"
// console.log ("Hello my name is " + name + " and I am " + age + " years old")
}

// sayHello("Orient", 18)
let hellostatement = (sayHello("Orient",18))
hellostatement += " and I live in penang"
console.log(hellostatement)


function add(n1, n2) {
  return n1 + n2;
}
console.log(add(3, 7)); //12
console.log(add(8, 9)); //17


function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius(90)); //32.2222

// Assign operators
console.log("===================")
let p = 5;
p += 2; // same as p = p + 2
p -= 3; // same as p = p - 3
p *= 12; // same as p = p * 12
p /= 8; // same as p = p / 8

// Compare operators
// equality operator
console.log("===================")
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(5 == "25"); // false
console.log(1 == true); // true
console.log(0 == false); // true

// strict equality operator
console.log("===================")
console.log("1" === 1); // false
console.log(5 === 2); // false
console.log(0 === false); // false

// Inequality operators
console.log("===================")
console.log(5 != 5); // false
console.log(1 != true); // false
console.log(5 != 99); // true

// strict inequality operator
console.log("===================")
console.log(1 !== 2); // true
console.log(1 !== 1); // false
console.log("" !== 0); // true

/*

==

!=

===

!==

*/

// More Comparison Operators
console.log("===================")
console.log(9 > 9)
console.log(6 > 7)
console.log(10 < 5)
console.log(5 > 3)
console.log(9 >= 9)
console.log(4 <= 4)
console.log(!(3 >= 2))

// Logical operators
console.log("===================")
console.log(5 > 2 && 2 < 5); // true
console.log(5 > 2 && 4 < 9); // true
console.log(5 > 7 && 4 < 9); // true
console.log(5 > 7 || 15 < 5); // false
console.log(!(5 > 7 || 15 < 5)); // true