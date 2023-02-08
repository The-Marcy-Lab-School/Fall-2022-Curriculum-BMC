let $body = document.querySelector("body")

/* Step 1: rendering manually */
let $square1 = document.createElement("div")
let $square2 = document.createElement("div")
let $square3 = document.createElement("div")
let $square4 = document.createElement("div")
$square1.style.background = 'grey';
$square2.style.background = 'black';
$square3.style.background = 'black';
$square4.style.background = 'grey';

let $row1 = document.createElement("div");
let $row2 = document.createElement("div");
$row1.setAttribute("class", "row");
$row2.setAttribute("class", "row");

$row1.append($square1, $square2);
$row2.append($square3, $square4);

$body.append($row1, $row2);


/* Step 2: matrix, colors array, and iteration */
let checkerMatrix = [
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
]
let checkerColors = ['red', 'blue']

checkerMatrix.forEach(row => {
  let $row = document.createElement("div");
  $row.setAttribute("class", 'row');

  row.forEach(val => {
    let $square = document.createElement("div")
    $square.style.background = checkerColors[val];
    $row.append($square);
  });

  $body.append($row);
})



/* Step 3: Write a function to draw any matrix with colors*/

function draw({matrix, colors}) { // use object destructuring parameters
//   $body.innerHTML = ""; // clear the body

  matrix.forEach(row => {
    let $row = document.createElement("div");
    $row.setAttribute("class", 'row');
    
    row.forEach(val => {
      let $square = document.createElement("div")
      $square.style.background = colors[val];
      $row.append($square);
    });
    
    $body.append($row);
  })
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


draw(apple);
draw(pacman);
draw(mario);
