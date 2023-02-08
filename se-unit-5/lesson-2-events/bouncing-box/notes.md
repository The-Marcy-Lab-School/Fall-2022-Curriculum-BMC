# Bouncing Box

In this exercise, we will practice animating a box that moves across the screen, bouncing off both sides of the window.

## Step 1: Setup

Create an empty `index.html` and `index.js` file.

In the HTML file, create your initial structure by typing `!` and hitting <kbd>Tab</kbd>

Then, in the `<head>` of your HTML file, load your JavaScript file using a `<script src="file.js">` tag

## Step 2: HTML and CSS

Inside the `<body>` of your HTML file, add a single `<div>` element with an `id="box"` attribute.

Inside the `<head>` of your HTML file, add a `<style>` tag (or link to a separate CSS file) and insert the following CSS inside:

```css
#box {
    background: coral;
    
    width: 50px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: monospace;
    color: black;
    font-size: 2em;
    user-select: none;
    
    position: absolute;
    top: 0;
    left: 0;
}
```

Take a moment to understand what EVERY single piece of CSS does to change the appearance of the `#box` element.

Pay close attention to the `position`, `top`, and `left` properties. These will be important later.

Preview / render your HTML file to see the box!

## Step 3: JavaScript

In your JavaScript file, `console.log` the value of `document.body`. The value `null` will appear in your console.

Why? In our HTML file, we load in the JavaScript file (which executes its code) BEFORE the `<body>` element is rendered — so it doesn't exist yet!

We need to ensure that our JavaScript is executed AFTER the HTML page loads. There are a couple of ways to do this:
1. Move the `<script>` tag loading our JavaScript file to the bottom of the HTML file (after the `<body>` but before the closing `</html>` tag)
2. Wrap our JavaScript inside a `"load"` event.

You can try the first approach, however, we should also demonstrate the second approach since it is more reliable. 

Use the `addEventListener` method on the `window` object passing in two arguments:
1. `"load"` — the event fired after the HTML content is fully loaded
2. `(event) => {}` — the callback function to be execiuted when the page is loaded. All of our code will go inside this callback.

Inside this callback, again try printing out `document.body` and you should now see the `<body>` element printed to the console!

All subsequent steps will involve writing code inside of this callback.

## Step 4: Reposition the box

Our `#box` element has a `position: absolute` style meaning we can manually position it anywhere within the `<body>` by changing its `top` and `left` properties. 
* `left` allows us to change the horizontal position along the x-axis. When `left` is `0`, the `#box` element will be positioned on the left side of the screen.
* `top` allows us to change the vertical position along a flipped y-axis. When `top` is `0`, the `#box` element will be positioned at the top of the screen.

To get a feel for these properties, play around with them by directly modifying your CSS style.

We can also do this using JavaScript's DOM API:
* Declare a variable called `boxElement`
* Use the `document.querySelector()` method to grab the `Element` object corresponding to the `<div id=#box>` and assign it to `boxElement`
* Modify the `boxElement`'s `left` and `top` properties:
    * Set `boxElement.style.left` to `'20px'`
    * Set `boxElement.style.top` to `'20px'`

## Step 5: Automate it with a timer!

We want to automate the movement of the box — we don't want to have to manually change the CSS every time we want the box to move. 

To do this, we'll need to do a few things. Let's get an overview of the process before diving in:
* Declare variables to manage the current position, direction, and speed of our box as it moves around our screen.
* Declare an `update` function that will update the position of the box according to the equation `x = x + (speed * direction)`
* Use a timer to trigger that `update` function 20 times per second, resulting in continuous motion.

Let's first set up the variables:
* Declare a variable called `x` and initialize it to `0`
* Declare a variable called `directionX` and initialize it to `1`
* Declare a variable called `speedX` and initialize it to `10`

Next, we'll create an `update` function:
* Declare a function called `update`.
* When invoked, it should update the `x` variable according to the equation `x = x + (speedX * directionX)`
* Then, it should update the `boxElement.style.left` property to the new `x` value. Remember, it needs to be formatted like so: `"20px"` (the number `20` alone won't work)

Test this function by invoking it 3 times: the box should move `30` pixels to the right.

Finally, use `setInterval()` to create a new interval that invokes the `update` function ever `50` milliseconds. 

Then, sit back and watch as your box moves across the screen!

## Step 6: Make it bounce

We want to ensure that our box stays in the screen. Basically, we just need to write an `if` statement in our `update` function saying: "If the box hits the right wall, set its `directionX` to `-1` and if it hits the left wall, set its `directionX` back to `1`"

How can we know if the box has hit the wall? Here is a naive way of doing it. It assumes that the `<body>` element that the `boxElement` is inside of is `500px` wide. Try adding this to your `update` function and observe what happens:

```js
// inside of the update function:
if (x + 50 > 500) {  // if the right edge goes past 500
    directionX = -1; // move left
}
if (x < 0) {         // if the left edge goes past 0
    directionX = 1;  // move right
}
```

Why do we add `50` to `x` when checking if it is greater than `500`? 

Remember that the `x` position that we're tracking is used to set the `boxElement.style.left` property. That `left` property is the x-coordinate of the _left edge_ of the box. When checking if the left side hits the left wall, we can just see if `x` is less than `0`.

If we want the _right edge_ to bounce off of the right wall, we need to add the width of the box to `x`.


```
---------
|       |
|       |
|       |
---------
^       ^
x      x+50
```

There's one problem with that solution though: we don't want to hardcode the width of the box or the width of the body. So, how can we access that information?

All DOM `Element` objects have a few useful properties:
* `element.clientWidth` is the inner width (ie. the space inside an element including padding but excluding borders and scrollbars)
* `element.offsetWidth` is the outer width (ie. the space occupied by the element, including padding and borders)

So, with some nice math we can write:

```js
if ((x + boxElement.offsetWidth) > document.body.clientWidth) {
    directionX = -1;
}
if (x < 0) {         // if the left edge goes past 0
    directionX = 1;  // move right
}
```

## Step 7: Organize!

Well done! At this point, you have a bouncing box program! Let's get organized though.

Most JavaScript files can be broken down into three sections:
1. Variables and initialization
2. Core execution logic
3. Helper Functions

To get organized, start by creating three comment headers for each section. Then, move your code into the appropriate section. Here's what my file looks like:

```js
window.addEventListener("load", (event) => {
    ///////////////////////////////
    // Variables and Initialization
    ///////////////////////////////
    const boxElement = document.querySelector("#box");
    let x = 0;
    let speedX = 10;
    let directionX = 1;
    
    ///////////////////////////////
    // Core Execution Logic
    ///////////////////////////////
    setInterval(update, 50);
    
    function update() {
        x += speedX * directionX;
        boxElement.style.left = `${x}px`;
        
        if ((x + boxElement.offsetWidth) > document.body.clientWidth) {
            directionX = -1;
        }
        if (x < 0) {         // if the left edge goes past 0
            directionX = 1;  // move right
        }
    }
    
    ///////////////////////////////
    // Helper Functions
    ///////////////////////////////
    
});
```

We don't have any helper functions at the moment but let's change that. 

I like to keep my core execution logic as high-level as possible, meaning I like it to almost exclusively utilize helper functions.

For example, what if the `update` function looked like this:
```js
function update() {
    updateBoxPosition();
    checkForBounces();
}
```

It paints a very clear picture of what happens on each update.

Refactor your `update` function such that it looks like my code above and utilizes two helper functions: `updateBoxPosition` and `checkForBounces`.

## Step 8: Stopping the box

Let's add in a pause feature so that we can stop the box from moving at any point.

* First, add in a `<button>` element to the body of your HTML page with the text `Pause` and a unique `id` attribute.
* Then, in your JavaScript file, declare a new helper function called `pause()`.
* Next, use the `document.querySelector()` method to grab the pause button `Element` and store it in a variable.
* Finally, use the `addEventListener` method to add a `click` event listener to the puase button's `Element` such that it invokes the `pause()` helper function whenever the button is clicked.


To get the box to stop moving, we need to turn off the `interval` that is causing the `update` function to run. Currently, `setInterval` is invoked but its return value isn't stored anywhere. `setInterval` returns an object that can be used later to turn off the interval using a separate `clearInterval` function. 
* First, declare a `let` variable called `interval` and assign the value returned from `setInterval` to it.
* Then, inside of the `pause()` helper function, invoke `clearInterval(interval)`

> How could you add another button to start the box moving again?

## Challenges

Well done! You've not only finished the bouncing box program but you've also organized your code into a structure that will appear time and time again.

Now, it's time to stretch your imagination and take this project to the next level.

Here are some ways to expand on this project:
* Make the box move vertically in addition to horizontally. Make sure it bounces off of the top and bottom of the screen.
* Add in multiple boxes that can all move independently.
* Add click event listeners to your box(es) such that each box can display the number of times it was clicked.
* Make the boxes disappear if they've been clicked at least 3 times.