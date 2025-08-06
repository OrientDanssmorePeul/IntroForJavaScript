// Control Structures

// If-Else Statements
const color = "black"
if (color == "green"){
    console.log("Go")
}else{
    console.log("Stop")
}

const age = 16
if(age > 18){
    console.log("You May Enter")
}else{
    console.log("You Shall Not Pass")
}

// If-Else-If Statements
let marks = 60
if(marks >= 90){
    console.log("Your Grade Is A")
}else if(marks < 90 && marks >= 70){
    console.log("Your Grade Is B")
}else if(marks < 70 && marks >= 60){
    console.log("Your Grade Is C")
}else if(marks < 60 && marks >=40){
    console.log("Your Grade Is D")
}else if(marks < 40 && marks >=0){
    console.log("Your Grade Is Very Terrible")
}