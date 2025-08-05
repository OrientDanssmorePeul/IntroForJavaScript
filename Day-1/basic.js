// This is a console log 

console.log ("hello world!")

/*
this is a multi-line slash
*/

var x = "5"
console.log (x)
var x = "20"
console.log (x)

let y = 10;
// let y = 30; // This will cause an error because y has already been declared
y = 30;
console.log(y); // Output: 30

var x = "orient"
console.log(x)

let myname = "orient2"
console.log(myname)

const a = 25;
// a = 30; // This will cause an error because a is a constant variable
console.log(a); // Output: 25

const ICNumber = "070508070143"
console.log(ICNumber)

let somewords = "This is a string"
let stringOfNumbers ="100"
let actualNumber =100
let actualNumber2 =200

let combine = stringOfNumbers + actualNumber + actualNumber
console.log(combine)

let total = actualNumber + actualNumber2
console.log(total)

const isAbsent = true;
console.log(isAbsent); // Output: true

let v;
console.log(v); // Output: undefined

const h = null; 
console.log(h); // Output: null

const Orient = {
    fullname: "Orient Danssmore Peul",
    age: 18,
    address: "Penang",
    hobby: "Chess",
}
console.log(Orient.fullname)
console.log(Orient.age);
console.log(Orient.address);
console.log(Orient.hobby)

const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Mango
console.log(fruits[2]); // Output: Banana

//Object + Array
const comicCharacters = {
    MCU: {
        heroes: ["iron Man", "captain america", "thor"],
        vilains: ["thanos", "ultron", "dr,doom"]
    },
    DC: {
        heroes: ["superman", "batman", "flash"],
        vilains: ["lex luthor", "joker", "reverse flash"]
    }
}
console.log(comicCharacters.MCU.heroes[1])
console.log(comicCharacters.MCU.vilains[2])
console.log(comicCharacters.DC.heroes[2])
console.log(comicCharacters.DC.vilains[0])