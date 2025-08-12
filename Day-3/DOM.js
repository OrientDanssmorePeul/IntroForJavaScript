let headings = document.getElementsByTagName("h1")
let headingWithID = document.getElementById("myheading")

console.log(headings)
console.log(headingWithID)

headings[0].innerHTML = "I Change My Heading Text"

let divWithClass = document.getElementsByClassName("row")
let headingInsideDiv = divWithClass[0].getElementsByTagName("h1")

console.log(divWithClass)
console.log(headingInsideDiv[0])

let elementWithClass = document.querySelectorAll(".my-class")
console.log(elementWithClass)

let myDiv = document.getElementsByClassName("my-div")[0]
myDiv.style.backgroundColor = "blue"

let thisDiv = document.getElementById("this-div")
thisDiv.style.color = "white"

let para = document.getElementById("my-paragraph")
para.classList.add("my-para")


