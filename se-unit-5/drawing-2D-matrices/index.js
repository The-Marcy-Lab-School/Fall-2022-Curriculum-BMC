let bodyElement = document.body;

/* Step 1: rendering manually */
let row1Element = document.createElement("div");
let row2Element = document.createElement("div");
row1Element.setAttribute("class", "row");
row2Element.setAttribute("class", "row");

bodyElement.append(row1Element, row2Element);

let square1Element = document.createElement("div")
let square2Element = document.createElement("div")
let square3Element = document.createElement("div")
let square4Element = document.createElement("div")
square1Element.style.background = 'grey';
square2Element.style.background = 'black';
square3Element.style.background = 'black';
square4Element.style.background = 'grey';

row1Element.append(square1Element, square2Element);
row2Element.append(square3Element, square4Element);



/* Step 2: matrix, colors array, and iteration */
let checkerMatrix = [
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
]
let checkerColors = ['red', 'blue']

checkerMatrix.forEach(currRow => {
  let rowElement = document.createElement("div");
  rowElement.setAttribute("class", 'row');
  bodyElement.append(rowElement);

  currRow.forEach(value => {
    let squareElement = document.createElement("div")
    squareElement.style.background = checkerColors[value];
    rowElement.append(squareElement);
  });
});



/* Step 3: Write a function to draw any matrix with colors*/

function draw(matrix, colors) {
//   $body.innerHTML = ""; // clear the body

  matrix.forEach(currRow => {
  let rowElement = document.createElement("div");
  rowElement.setAttribute("class", 'row');
  bodyElement.append(rowElement);

  currRow.forEach(value => {
    let squareElement = document.createElement("div")
    squareElement.style.background = colors[value];
    rowElement.append(squareElement);
  });
});
}

/* Step 4: Make some matrices! */

let apple = {
  matrix: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  colors: ['white', 'red']
}


let pacman = {
  matrix: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ], 
  colors: ['white', 'black', 'yellow']
}

let mario = {
  matrix: [
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
  ],
  colors: ['white', 'red', 'SaddleBrown', '#fabe8f', 'black', 'blue', 'yellow']
}


draw(apple.matrix, apple.colors);
draw(pacman.matrix, pacman.colors);
draw(mario.matrix, mario.colors);
