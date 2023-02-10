const bodyElement = document.body
const tableElement = bodyElement.children[2]

const tHeadElement = tableElement.children[0]
const tBodyElement = tableElement.children[1]

//Have fun manipualting colors
bodyElement.style.backgroundColor = "yellow"
tHeadElement.style.backgroundColor = "pink"
tBodyElement.style.backgroundColor = "blue"
tBodyElement.style.color = "white"

debugger

tBodyElement.children[0].children[0].innerText = "Vaca Ben"



