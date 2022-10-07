# Unit 1 Lesson 4: HTML Forms - Lecture Notes
## Monday, September 22, 2019

### The Why
* **_Forms_** are the way that we send and retrieve information on the web.
  * Whenever you log in to Facebook, search for a video on YouTube, or add something to your cart on UberEats, you are submitting a form!
*  **_HTTP** (or Hypertext Transfer Protocol)_is a set of rules that determine how messages are formatted and transmitted over the Web.
  Learn more about HTTP [here](https://www.youtube.com/watch?v=kBXQZMmiA4s)
* Forms are wrapped in a `<form>` tag. This tag congtains a `method` attribute that indcates the HTTP method to be used and an `action` attribute that determines the location where the form information should be sent.
* There are a number of different `<input>` types that one can use to place hard or soft boundaries on the type of data that a user submits.
* Forms, by default, are relatively unstructured. We can use semantic elements such as `<fieldset>`, `<legend>`, and even `<section>`, `<ul>`, and `<li>` to structure our form.

## Code-a-long
1. `<form>`
2. `<fieldset>`
3. `<legend>`

4. `<input type="text">`
5. `<input type="email">`

6. `<label for="full-name">`
7. `<label>` wrapped around `<input type="email">`

8. `<textarea>`
   Demonstrate the following:
     * White space when `<textarea>` expands two lines
     * `placeholder` as an alternative

9. New `<fieldset>`
10. New `<legend>`
11. `<input type="checkbox">`

12. One more `<fieldset>` + `<legend>` for `name=hotsauce`
13. `<label for="hotsauce-brands">`
14. `<select name="favorite-hotsauce" id="hotsauce-brands">` 
15. `<option value="texas-pete">Texas Pete</option>

Finally...
16. `<input type="submit" value="Fire Away!" />`

#### Now on to styling...
How do we get our form to look like [_this_](https://codepen.io/freeCodeCamp/full/VPaoNP)?
