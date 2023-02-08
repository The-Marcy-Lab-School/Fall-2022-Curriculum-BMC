# Drawing Pixel Art

## Step 1

Create a variable called `bodyElement` to hold a reference to the `Element` Node for the `<body>`.

All future elements will be appended as children of this `Element`.

Did you know?
```js
document.querySelector('body') === document.body // true
```

<details><summary>Stuck? Click Here</summary>

```js
let bodyElement = document.body;
// or...
let bodyElement = document.querySelector('body');
```

</details>

## Step 2

We're going to start by making a simple 2x2 checkered pattern.

First, create two `div` `Element`s and store each in a variable (`row1Element`, `row2Element`).

Next, give each of your `rowXElement`s a class property of `"row"` (the `.row` CSS has been provided for you — it's just a flexbox).

Finally, append both of your `rowXElement`s to the `bodyElement`.

<details><summary>Stuck? Click Here</summary>

```js
let row1Element = document.createElement("div");
let row2Element = document.createElement("div");
row1Element.setAttribute("class", "row");
row2Element.setAttribute("class", "row");

bodyElement.append(row1Element, row2Element);
```

</details>

## Step 3

Almost there! Create four more `div` `Element`s and store them in separate variables. 

Then, Style them so that two squares have a `'grey'` background color and two of them have a `'black'` background color. 

Finally, append two of the squares to the first row and append the other two to the second row. The result should be a checkerboard pattern.

<details><summary>Stuck? Click Here</summary>

```js
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
```

</details>

## Step 4

There was quite a bit of repetition in steps 2 and 3 — let's fix that.

Instead of creating every element and styling them manually, we're going to perform a little trick:
* Create a 4x4 two-dimensional array (a matrix) and assign it to a variable called `checkerMatrix`.
* Each value in `checkerMatrix` should be either a 0 or a 1, alternating in a checkerboard pattern.
* Create a separate array called `checkerColors` with two values: `['red', 'blue']` (feel free to change these up)

Now here's where the fun happens:
* For each `currRow` in the `checkerMatrix`:
    * Create a new `div` `Element` and store it in a variable called `rowElement`
    * Give `rowElement` a class of `'row'`
    * Append `rowElement` to `bodyElement`
    * For each `value` in `currRow`:
        * Create a new `div` `Element` and store it in a variable called `squareElement`
        * Style the `squareElement` such that its background color is a color from `checkerColors`. The index of the color chosen should be specified by the current `value` in the `currRow` of `checkerMatrix`
        * Append `squareElement` to `rowElement`

<details><summary>Stuck? Click Here</summary>

```js
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
```

</details>

## Step 5

Phew! That was a lot of work.

But, we've created an algorithm that can render a 2D matrix and a corresponding colors array! 

The final step is to convert that algorithm into a `draw(matrix, colors)` function that can take in any 2D `matrix` and a corresponding `colors` array and render it as a child of our `bodyElement`.

<details><summary>Stuck? Click Here</summary>

```js
function draw(matrix, colors) {
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
```

</details>

## Step 6

Once you've the `draw` function, try out a few of these matrices:

```js
let matrix1 = [
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
];
let colorsArr1 = ['white', 'red'];

let matrix2 = [
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
];
let colorsArr2 = ['white', 'black', 'yellow'];

let matrix3 = [
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
let colorsArr3 = ['white', 'red', 'SaddleBrown', '#fabe8f', 'black', 'blue', 'yellow']
```

