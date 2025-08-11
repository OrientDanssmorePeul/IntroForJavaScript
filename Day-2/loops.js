/*
for (initialization; condition; iteration) {
  // code to be executed
}
while (condition) {
  // code to be executed
}
*/

// For Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let set = 1; set <= 3; set++) {
    for (let rep = 1; rep <= 5; rep++) {
        if (rep == 3){
            console.log("Set " + set + " Rep " + rep + ": Done");
        }
    }
}

const fruits = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While Loop
let j = 1;

while (j <= 10) {
  console.log("While J:" + j);
  j++;
}

let set = 1;
while (set <= 3) {
    let rep = 1;
    while (rep <= 5){
        console.log("Set " + set + " Rep " + rep + ": Done")
        rep++;
    }
    set++;
}
let myname = prompt("Enter your Name")
    console.log("Hello My name Is" + myname)

let input;
while (input !=='Yes' && input !== 'No') {
    input = prompt("Please enter 'Yes' or 'No' :")
}
console.log ('User Entered', input);