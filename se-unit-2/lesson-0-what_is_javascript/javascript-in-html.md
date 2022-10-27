# What is JavaScript

## How we write and run JavaScript for the browser

JavaScript can be executed in the browser or in the Command Line with `node`. We will be focusing on using JavaScript in the browser for a few reasons:

* It gives us practice for later when we will be building websites with JavaScript
* We can use the browser's developer tools to more closely inspect our code.

First, we create the necessary files:
* `index.html`
* `script.js`

Next, there are two ways to run JavaScript with an HTML file:

1. We can either embed JavaScript directly into the HTML file by putting JavaScript code inside of `<script></script>` tags.  
2. Or, the more common (and better) approach is to link to a separate file.

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
console.log("Hello from script.js")
```

To see the `console.log` statements, simply preview the `index.html` page and inspect. Then, click on the "Console" tab.

## Using the DevTools

You should be comfortable using the following tools in the "Sources" tab of the Chrome devtools.

First, select the `script.js` file from the File navigator on the left

* the `debugger` keyword
* step over
* step in
* step out