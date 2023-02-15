# Unit 5 Lesson 2 Practice
## Events and the Event Loop

0. In the context of web programming, what is an event? What are some of the different types of events that might occur in a web application?

1. What is a callback function? How/when are they executed?

2. Write a function so that, when the user clicks anywhere on the page, the x and y position of the mouse are logged to the console.

3. Create a webpage that displays a balloon (using the balloon emoji, 🎈). When you press the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow, it should deflate (shrink) 10 percent. Be sure to create both an `index.html` and a `script.js` files.

You can control the size of text (emoji are text) by setting the font-size CSS property (style.fontSize) on its parent element. Remember to include a unit in the value—for example, pixels (10px).

The key names of the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the balloon, without scrolling the page.

```html
<p>🎈</p>
```

4. Add a feature to the application above where, if you blow up the balloon past a certain size, it explodes. In this case, exploding means that it is replaced with an 💥 emoji, and the event handler is removed (so that you can’t inflate or deflate the explosion).

5. Write a function that detects when a user is typing a key. If the user is pressing down a key, we should display that key value in the DOM. If nothing is being pressed down, then we should clear from the DOM the key that was pressed. 
