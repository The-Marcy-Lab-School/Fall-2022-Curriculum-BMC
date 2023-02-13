/* Step 0: Adding the header and main*/
const bodyElement = document.body;

//create children of body 
const headerElement = document.createElement("h1")
const mainElement = document.createElement("main")

//modified the element(s)
headerElement.innerText = "My Pixel Art"

//added both elements to our DOM
bodyElement.append(headerElement, mainElement)

/* Step 2: matrix, colors array, and iteration */
let checkerColors = ['white', 'red', 'SaddleBrown', '#fabe8f', 'black', 'blue', 'yellow'];
let checkerMatrix = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,0,0,2,2,2,3,3,3,4,3,0,0,0,0],
  [0,0,2,3,2,3,3,3,3,4,3,3,3,0,0],
  [0,0,2,3,2,2,3,3,3,3,4,3,3,3,0],
  [0,0,2,2,3,3,3,3,3,4,4,4,4,0,0],
  [0,0,0,0,3,3,3,3,3,3,3,3,0,0,0],
  [0,0,0,1,1,5,1,1,1,1,0,0,0,0,0],
  [0,0,1,1,1,5,1,1,5,1,1,1,0,0,0],
  [0,1,1,1,1,5,5,5,5,1,1,1,1,0,0],
  [0,3,3,1,5,6,5,5,6,5,1,3,3,0,0],
  [0,3,3,3,5,5,5,5,5,5,3,3,3,0,0],
  [0,3,3,5,5,5,5,5,5,5,5,3,3,0,0],
  [0,0,0,5,5,5,0,0,5,5,5,0,0,0,0],
  [0,0,2,2,2,0,0,0,2,2,2,0,0,0,0],
  [0,2,2,2,2,0,0,0,2,2,2,2,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

checkerMatrix.forEach((row) => {
  console.log(row)
  const rowElement = document.createElement("div")
  rowElement.className = "row"  
  mainElement.append(rowElement)

  row.forEach(value => {
    console.log(value)
    const square = document.createElement("div")
    square.style.backgroundColor = checkerColors[value]
    rowElement.append(square)
  })
})

/* Step 3: Write a function to draw any matrix with colors*/


