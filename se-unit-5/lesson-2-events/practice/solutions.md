## Events and the Event Loop

0. In the context of web programming, what is an event? What are some of the different types of events that might occur in a web application?

**Suggested Answer** In web programming, an event is any external action which can trigger a response by our program. Broadcasting events allows us to respond when specific actions occur, rather than constantly monitoring the state of certain inputs. For the web, this could be any user action such as scrolling, a mouse click, a key press, or a form submission.

1. In your own words, describe the event loop. How does it work?

**Suggested Answer** The event loop acts as a first in, first out queue for pieces of code to be executed asynchronously. When a user clicks a button, for example, we may want to invoke a callback function. If that function were to happen synchronously, all other parts of the browser would need to wait for that function. This would pause all activity in the browser and make our application unresponsive. Instead, we can pass code onto the event loop, which can queue up code to be executed later asynchronously.

2. Write a function so that, when the user clicks anywhere on the page, the x and y position of the mouse are logged to the console.

**Suggested Answer**

```javascript
document.addEventListener('click', function(e){
  console.log(`Mouse X: ${e.pageX}, Mouse Y: ${e.pageY}`)
})
```

3. Write a page that displays a balloon (using the balloon emoji, 🎈). When you press the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow, it should deflate (shrink) 10 percent.

You can control the size of text (emoji are text) by setting the font-size CSS property (style.fontSize) on its parent element. Remember to include a unit in the value—for example, pixels (10px).

The key names of the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the balloon, without scrolling the page.

```html
<p>🎈</p>

<script>
  // Your code here
</script>
```

**Suggested Answer**: Here's one simple way you might solve this. One key is to use a piece of state to maintain the size of the balloon.

```html
<p id="balloon">🎈</p>

<script>
  const el = document.getElementById('balloon')
  let fontSize = 10;
  el.style.fontSize = `${fontSize}px`
  document.addEventListener('keydown', function(e){
    switch (e.key) {
      case 'ArrowUp':
        fontSize += 10;
        break;
      case 'ArrowDown':
        fontSize -= 10;
    }

    el.style.fontSize = `${fontSize}px`
  })
</script>
```

4. Add a feature to the application above where, if you blow up the balloon past a certain size, it explodes. In this case, exploding means that it is replaced with an 💥 emoji, and the event handler is removed (so that you can’t inflate or deflate the explosion).

**Suggested Answer** Here, we add a `maxSize` and check to see if we've exceeded that size. If so, we need to remove the event listener.

```html
<script>
  const el = document.getElementById('balloon')
  let fontSize = 10;
  const maxSize = 100;
  el.style.fontSize = `${fontSize}px`

  const changeBalloon = function(e){
    switch (e.key) {
      case 'ArrowUp':
        fontSize += 10;
        break;
      case 'ArrowDown':
        fontSize -= 10;
    }

    if (fontSize > maxSize) {
      el.innerText = `💥`
      document.removeEventListener('keydown', changeBalloon)
    } else {
      el.style.fontSize = `${fontSize}px`
    }
  }

  document.addEventListener('keydown', changeBalloon)
</script>
```

5. Write a function that detects when a user is typing a key. If the user is pressing a key, we should display that key value in the DOM. If nothing is being typed, we should clear the key that was pressed.

**Suggested Answer**: Here's one way you might solve it. 
```javascript
function displayPressedKey(){
  const display = document.getElementById('display');

  document.addEventListener('keydown', function(e){
    display.innerText = e.key;
  })

  document.addEventListener('keyup', function(e){
    display.innerText = '';
  })
}
```
