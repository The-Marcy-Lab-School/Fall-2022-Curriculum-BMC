# What is JavaScript

## How we write and run JavaScript for the browser

JavaScript can be executed in the browser or in the Command Line with `node`. We will be focusing on using JavaScript in the browser for a few reasons:

* It gives us practice for later when we will be building websites with JavaScript
* We can use the browser's developer tools to more closely inspect our code.

First, we create the necessary files:
* `index.html`
* `script.js`

Next, there are two ways to run JavaScript with an HTML file:

1. We can put JavaScript code inside of `<script></script>` tags in an HTML file.  
2. Or, the more common (and better) approach is to link to a separate JavaScript (`.js`) file.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document with JavaScript</title>
    </head>
    <body>
        <script>
            console.log("this is embedded javascript")
        </script>
        <script src="script.js"></script>
    </body>
</html>
```

```js
// script.js
console.log("Hello from script.js")
```

To see the `console.log` statements, simply preview the `index.html` page and inspect. Then, click on the "Console" tab.

## Using the DevTools

Chrome's devtools gives us deep insight into how our program runs. It can be a great tool for **learning** and for **debugging**.

You should be comfortable using the following tools from the "Sources" tab of the Chrome devtools.
* the `debugger` keyword
* Debugger Controls
    * Resume execution
    * Step over
    * Step in
    * Step out

### Debugger

Insert the `debugger` keyword anywhere in your JavaScript code to cause the browser's devtools to pause execution.

```js
let num1 = prompt("choose your first number");
let num2 = prompt("choose your first number");

debugger; // let's look at the values returned from the prompts!

let sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
```