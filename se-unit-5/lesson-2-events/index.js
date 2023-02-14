let bodyElement = document.body;
console.log(bodyElement)

//When our #die div is clicked, 
//then I want to change the number in the div

//Select our #die div
let diceElement = document.querySelector("#die")
diceElement.addEventListener('click', handledDice)

//We want our whole webpage to listen for a keydown event
document.addEventListener('keydown', handleKeyboard)

function handleKeyboard(event){
    //I want event.key to show up <span id="key"></span>
    console.log(event.key)
    const spanElement = document.querySelector("#key")
    // debugger
    spanElement.innerText = event.key
}

function handledDice(event){
    console.log(event)
    let num = Math.ceil(Math.random() * 6)
    diceElement.innerText = num
}

function logToConsole(){
    console.log("I have been clicked")
}


