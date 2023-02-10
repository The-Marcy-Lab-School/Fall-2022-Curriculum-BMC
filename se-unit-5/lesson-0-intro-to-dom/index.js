console.log("hello DOM!")

document.body.style.backgroundColor = "pink";

let tableElement = document.body.children[2];
let tableHead = tableElement.children[0];
let tableBody = tableElement.children[1];
console.log(tableBody)
tableBody.style.fontFamily  = "Times New Roman"
tableBody.style.backgroundColor = "red"
// tableBody.children[0].children
tableHead.style.backgroundColor = "white"
// debugger
tableBody.children[0].children[0].innerText = "Lady Computer Wizard"