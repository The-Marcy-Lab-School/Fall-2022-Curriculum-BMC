let bodyElement = document.body;
console.log(bodyElement)

let dieElement = document.querySelector("#die")
updateDie()

dieElement.addEventListener('click', updateDie)
document.addEventListener('keydown', handleKeydown)
document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', handleButton)
})

function updateDie(event){
    console.log(event)
    dieElement.innerText = Math.ceil(Math.random() * 6)
}

function handleKeydown(event){
    document.querySelector("#key")
        .innerText = event.key
}

function handleButton(event){
    console.log(event.target)
    event.target.disabled = true
    document.querySelector("#message")
        .innerText = `You pressed ${event.target.id}`
}
