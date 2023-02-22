# Pong

Pong is a game played by two players who each control a paddle placed at opposite sides of the screen. A ball is hit back and forth between the two paddles, and the top and bottom walls, until the ball goes past one player's paddle. The player who misses the ball loses the point. The game ends when one player reaches 11 points.

<img src="img/pong.gif">

**Table of Contents**
- [Learning Objectives](#learning-objectives)
- [Planning](#planning)
- [Grade Rubric and Schedule](#grade-rubric-and-schedule)
- [Helpful Code and Advice](#helpful-code-and-advice)
  - [Week 1](#week-1)
    - HTML for Game Items
    - CSS for Game Items
    - Using Factory Functions and Objects
    - Registering Keyboard Events
  - [Week 2](#week-2)
    - Moving the Ball
    - Repositioning DOM Elements
    - Collisions with Walls
  - [Week 3](#week-3)
    - Scoring
    - Collisions Between Objects
    - Ending the Game
- [Submit Your Work](#submit-your-work)

# Learning Objectives
- Practice modeling data with Objects
- Reuse code from previous projects to create something new
- Practice abstraction
- Apply the algorithm for detecting collisions between objects

# Planning

Always start any programming task by clarifying what you want to do and then breaking it down into small steps. Small steps can get you just about anywhere if you’ve got enough time. If you get stuck, break it down smaller!

With your partner, consider each of these questions and make sure you are aligned on your answers:

### User Story / Gameplay
- Describe the gameplay
- What are the conditions when the game begins? 
- Does the game have an end? If so, what are the conditions for when it ends?
- What `if`s will there be?

### Visual Game Components:
- What are the visual game components? For example, in Bouncing Box, the game components were the board and the box.
  - Which will be static? (the board)
  - Which will be animated? (the box)
- What data will you need to manage each game component? For example, in Bouncing Box, the data values were `positionX`, `speedX`, and `points`.

### Events / Logic 
- What events will occur in this game? (timer events, keyboard events, clicking events?)
- How do those events affect the data of the program?
- For each "event", write out the high-level logic of what will happen. It is better (and tricky) to be as specific as you can while remaining high-level!

For example: in bouncing box, when the box is clicked:
1. The speed is increased
2. The point total goes up by 1 and is displayed on the box
3. The position of the box is reset to 0

# Grade Rubric and Schedule

## Best Practices (25 points)

1. All code in proper sections (setup, core, helpers, etc.) - 5 points
3. Use comments to describe setup and functions - 5 points
4. Avoid magic numbers - 5 points
5. Use helper functions to separate concerns - 5 points
6. Generalize functions (i.e. only one collision detection function for all ball-paddle collisions; hard-coding to check both in a single function doesn't count) - 5 points

## Program Content (75 points)

### Week 1 Tasks

1. Get the ball, paddles, and two score boxes to display on screen - 10 points
2. Declare variables to store the data for the program - 5 points
3. Use a factory function to create objects - 5 points
4. Register keyboard events - 10 points

### Week 2 Tasks

1. Get the ball moving at game start (should be random to a degree) - 5 points
2. Update paddle and ball positions - 5 points
3. Make keyboard events react to the proper keys - 10 points
4. Handle paddle-wall collisions and ball-wall collisions - 10 points

### Week 3 Tasks

1. Handle scoring (increase score and reset ball) - 5 points
2. Handle ball-paddle collisions - 5 points
3. End the game after a certain score (at least 3) - 5 points

# Helpful Code and Advice

Below are some helpful hints and suggestions that will hopefully aid you in this project. These hints will be broken up by weekly tasks.

## Week 1

<details> <summary> HTML for Game Items: </summary>

Open the `index.html` file. You should see this in the body:

```html
<body>
  <div id='board'>
    <div id='gameItem'></div>
  </div>
</body>
```

Each project in this class will be build on some kind of `board` with various `gameItems` that are on the board. For this project, there are a number of required game items:
- the left paddle
- the ball
- the right paddle
- the score for player1
- the score for player2

Each one of these game items needs to be represented in HTML and, for the most part, `<div>`s can be used. To create a `<div>` with a particular `id` attribute, place the `id=""` attribute inside the opening tag:

```html
<div id="uniqueGameItemName"> </div>
```

Not all of these game items will need objects. It is up to you to decide which ones do and which ones don't. You also may want more elements than just the ones mentioned, but those are the bare minimum required.

</details>

<hr>

<details> <summary> CSS for Game Items </summary>

Open the `index.css` file.

Adding CSS makes our gameItems actually become visible. For all projects in this course, we'll be using simple 2D shapes since they are relatively easy to render with basic HTML and CSS skills.

The following properties will be useful for determining the appearance of our DOM elements:
- `background-color`: the color of the element
- `width`: the width of the element in pixels
- `height`: the height of the element in pixels
- `border-radius`: how rounded the edges of the element are. Leaving out this property will leave the element as a rectangle. Setting this value to half of `width` or `height` will make the shape a circle (assuming width and height are the same).

The following properties will allow us to place our elements anywhere on the screen, relative to the `board`.
- `position: absolute`: allows us to use the `top` and `left` properties to position HTML elements anywhere we want on the screen relative to the parent element. 
- `top`: the y-coordinate location of the element on a flipped y-axis (value increases as you move downwards).
- `left`: the x-coordinate location of the element.

Overall, the CSS should look like this:

```css
#id {
  /* appearance */
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  
  /* positioning */
  position: absolute;
  top: 100px;
  left: 100px;
}
``` 

Suggestions for this project:
- Each paddle should have a unique `background-color`
- Both paddles should have `width: 20px;` and `height: 80px;`
- The ball should have `width:20px;`, `height:20px` and `border-radius: 10px;`

</details>

<hr>

<details> <summary> Using Factory Functions and Objects </summary>

We will need to manage the data for each game item in this project: the ball and each paddle. 

Use objects to manage this data. For example, in bouncing box, we could organize the data for the box like so (shortening `positionX` and `positionY` to `x` and `y`:

```js
let box = {};
box.x = 0;
box.y = 100;
box.width = 200;
box.height = 200;
box.speedX = 1;
box.speedY = 1;
box.id = "#box";
```

Notably, we are now storing the id of the HTML element in a variable. This will tie the data that manages each game item to the HTML element that is being controlled.

For the walker project, we would refactor the `repositionGameItem()` function like this:

```js
function repositionGameItem() {
  box.x += box.speedX;              // update the position of the box along the x-axis
  let boxElement = document.querySelector(box.id);
  boxElement.style.left = box.x + "px";  // draw the box in the new location, positionX pixels away from the "left"
}
```

Since you'll be creating objects to represent the ball and each paddle, use a factory function to ensure that each `gameItem` has the data below:
- `gameItem.id`
- `gameItem.x`
- `gameItem.y`
- `gameItem.speedX`
- `gameItem.speedY`
- `gameItem.width`
- `gameItem.height`

When creating a factory function, the function should return an object that has a specific set of properties already assigned to it. The properties that you want customized for each object should be **parameterized** (turned into parameters/variables).

For example, consider this data for animal objects:

```js
let spot = {};
spot.name = "spot";
spot.species = "dog";
spot.owner = "Farmer Fred";

let daisy = {};
daisy.name = "daisy";
daisy.species = "bird";
spot.owner = "Farmer Fred";

let bessy = {};
bessy.name = "bessy";
bessy.species = "cow";
spot.owner = "Farmer Fred";
```

Since each object shares the same properties; `name`, `species`, and `owner`, I can create a factory function that reduces the repetitive creation of those objects.

For each value that is unique, I will add a parameter to my factory function. Any values that are shared can be hard-coded into the object.

```js
// Initialization
let spot = makeAnimal("spot", "dog");
let daisy = makeAnimal("daisy", "bird");
let bessy = makeAnimal("bessy", "cow");

// Factory Function
function makeAnimal(name, species) {
  let animal = {};
  animal.name = name;
  animal.species = species;
  animal.owner = "Farmer Fred";
  return animal;
}
```

Please keep in mind that the factory function you create should use the DOM API to extract CSS information to initialize the `x`, `y`, `width`, and `height` values of your objects.

Take a look at the `getBoundingClientRect()` ([MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)) function which will will help you immensely!

</details>

<hr>

<details> <summary> Registering Keyboard Events </summary>

This is something you should already have plenty of practice with. However, there are some minor differences this time. Notably, there are two paddles that must be interacted with. Both paddles should react to both `"keyup"` and `"keydown"` events.

There are two ways to approach this issue. You can either make a total of four event handlers (one "keyup" and "keydown" per paddle), or you can make just two. To keep things simple (and shorter), you should follow the latter approach and only make two event handlers.

**Handler 1:** Should handle the "keydown" event for both paddles. Just make sure your conditions check for the various keys you care about (up arrow, down arrow, 'W', and 'S'), and have the relevant paddle move in the appropriate direction.

**Handler 2:** Should handle the "keyup" event for both paddles. As with the "keydown" handler, make sure your conditions check for the various keys you care about (up arrow, down arrow, 'W', and 'S'), and have the relevant paddle stop moving when one of its keys is released.

Check out the [Walker project](https://github.com/benspector3/asd-template-keyboard-intro/) for ideas on how to move an object with your keyboard. Below is an example of simply printing  whenever the `ENTER` key is pressed down.

```js
let KEYCODE = {
  ENTER: 13,
}

function handleKeyDown() {
  let keycode = event.which;
  console.log(keycode);
  
  if (keycode === KEYCODE.ENTER) {
    console.log("enter pressed");
  }
}
```

Use https://keycode.info/ to find out the keycode for any key. 

</details>

<hr>

## Week 2

<details> <summary> Moving the Ball </summary>

Getting the ball to move is kind of important, so let's talk about how to do this. The best approach is as follows.

1. In the "helper functions" area, create a new function called `startBall` that has no parameters and only gives the `ball` object a starting position and speed.
2. Up in the "one-time setup" section, call the `startBall` function.

In the `startBall` function, you should give the `ball` object a new `x` and `y` position (that way, you can reuse the function after a point is scored!). It should, of course, be placed at the center of the board. Furthermore, you should give it initial `speedX` and `speedY` values. **These speed values should be random.** It's up to you how to make them random, but it's important to be careful, at least with the `speedX` value. For that reason, the following equation is suggested for `speedX`.

```js
randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
```

That equation will assign a value either between `-5` and `-2`, or a value between `2` and `5`. If you want to change the range of values, you should only change the `3` and `2` values of the equation. The `3` says what the spread should be (bigger number means bigger range of possible values), and the `2` says what the minimum absolute value of `randomNum` will be.

</details>

<hr>

<details> <summary> Repositioning DOM Elements </summary>

We'll need to reposition the ball and each paddle on each update of the timer. Luckily, we've learned how to move things in the past. This time we want to move multiple objects, but since moving an object is basically the same every time, you should only make one function to handle that. Here's how to approach the problem.

* **Step 1:** Create a function (call it `moveObject`), with a single parameter. That parameter will take the object you want to move as an argument.
* **Step 2:** In the function, use the parameter and dot notation to change the current `x` and `y` values of the object based on the object's current speed.
* **Step 3:** After updating `x` and `y`, use the DOM API to update the `"left"` and `"top"` properties of the corresponding DOM element 

Recall that you should use the DOM API to draw the element in the new position. For example, to change how far left or right an element is, you could write:

```js
let element = document.querySelector("#elementID")
element.style.left = x + "px";
```

If we wanted to move the element vertically instead, you would do the same thing, but for the `"top"` property:

```js
let element = document.querySelector("#elementID")
element.style.top = y + "px";
```

Of course, `"elementID"`, `x`, and `y` should all be obtained using the provided object and dot notation when writing your own function, which this example does not do.

</details>

<hr>

<details> <summary> Collisions with Walls </summary>

In order to detect collisions with walls, you need to know three things.
1. The position of the wall
2. The position of your object
3. The size of your object

When you start your project, you will not know the positions of all walls. 

To fix this, you should create two new `const` values under the "Constant Variables" section. These two new values should be
1. `BOARD_WIDTH`
2. `BOARD_HEIGHT`

You can obtain the values of `BOARD_WIDTH` and `BOARD_HEIGHT` using `boardElement.clientWidth` and `boardElement.clientHeight`, respectively.

That will give you the `x` position of the right side of the board and the `y` position of the bottom side of the board. As for the left and top of the board, both of those values are `0`, which is fine if you simply hard-code.

Once you know those values, detecting a collision with a wall is easy. You have four scenarios:

1. If an object's `x` value goes past the left side of the box, then it collided with it.
2. If an object's `y` value goes past the top side of the box, then it collided with it.
3. If an object's `x + width` value goes past the right side of the box, then it collided with it.
4. If an object's `y + height` value goes past the bottom side of the box, then it collided with it.

>**IMPORTANT:** You should make this collision detection be a single function (call it `wallCollision`) with a single parameter. The parameter should take in the object being checked as an argument (the `board` should *not* be an argument, however). This way, you only need to write the collision detection once, and you can use it not only for both paddles, but for the ball as well!

>**SUGGESTION:** The wall collisions can also be handled using the same min/max approach used in the Image Filtering project. Take a look at the `keepInBounds` function there. With some slight modifications, you can actually use that function for both your paddles and ball hitting the top and bottom walls. Give it a try if you'd like to challenge yourself and create more efficient code.

>**NOTE:** You can use the `wallCollision` function for the ball as well as the paddles. However, this will only work for detecting collisions with the top and bottom of the board.

</details>

<hr>

## Week 3

<details> <summary> Scoring </summary>

Scoring has three parts to it.

1. Detecting that scoring has taken place
2. Updating the score
3. Resetting the ball

Each of these parts is a simple task.

1. Detection - check if the ball collides with the left or right wall (can be done in the `wallCollision` function)
2. Update the appopriate score in memory, then redraw the scoring element to display the updated score (reminder: `document.querySelector("#scoreID").innerHTML = updatedScore)` will change the element with id `"scoreID"` to display whatever value is stored in the variable `updatedScore`)
3. Simply call your `startBall` function that you created back in Week 2

</details>

<hr>

<details> <summary> Collisions Between Objects </summary>

In games, collisions will occur frequently between objects. Having a function that can tell if two objects are colliding would be really convenient! The skeleton for such a function looks like this:

```js
function doCollide(obj1, obj2) {
  // return false if the objects do not collide
  // return true if the objects do collide
}
```

and we would use such a function in our program like this:

```js
if (doCollide(ball, paddleLeft)) {
  // bounce ball off paddle Left
}
```

You should have already created a `doCollide` function by this point. If you have, then you merely need to copy it into your code in the "helper functions" section, then call it twice. Once should be checking if the `ball` collides with the `leftPaddle`, and the other time should check if the `ball` collides with the `rightPaddle`.

If you have not created the `doCollide` function, then below is a rough explanation on how to do so.

><details> <summary> Click for Explanation </summary>
>Any object passed to our `doCollide` function should store the data for an HTML element. Therefore, they must have an `element` property storing the HTML element object (or its id) for the HTML element as well as `x` and `y` properties that store where the `element` is. 
>
>If you haven't set up your object data to represent the ball and the paddles, go back and do so before continuing
>
>For now, let's assume that we have a generic `gameItem` that is passed to the function as one of our objects. It's HTML, CSS, and JavaScript look like this:
>
>```html
><div id="gameItem"></div>
>```
>
>```css
>#gameItem {
>  position: absolute;
>  left: 100px;  /* distance from the left side of the screen */
>  top: 50px;    /* distance from the top of the screen */
>}
>```
>
>```js
>let gameItem = {};
>gameItem.element = document.querySelector("#gameItem");
>gameItem.x = 100;   // same as "left"
>gameItem.y = 50;    // same as "top"
>// speedX and speedY aren't needed for now
>```
>
>Assuming that you are dealing with two `gameItem` objects, `objA` and `objB`, the `doCollide` function's pseudocode would look like this:
>
>```js
>IF the left side of objA is left of the right side of objB AND
>  the right side of objA is right of the left side of objB AND
>  the top side of objA is above the bottom side of objB AND
>  the bottom side of objA is below the top side of objB: 
>  return true
>ELSE:
>  return false
>```
></details>

</details>

<hr>

<details> <summary> Ending the Game </summary>

This one is easy. If either player scores enough points to win, then simply call the `endGame()` function. The `endGame()` function has already been created for you.

</details>

<br>

# Submit Your Work

Submit your work regularly. Because these files are already being tracked by your GitHub repo, you can skip the "git add" step. Instead, enter the following commands:

```bash
git add -A
git commit -a -m "saving pong"
git push
```

Congratulations on completing Pong!
