# Unit 1 Lesson 4: HTML Forms - Lecture Notes

## Agenda

**0:00-0:10**: Intro [Slides](https://docs.google.com/presentation/d/1n866k4TfpurI_w2Tea3B0Al4f1ScIFsACvpg5QtoTfE/edit#slide=id.g164868a7e6d_0_231)
**0:10-0:20**: The What and the Why
**0:20-0:60**: Code Along

### The What and the Why

How can I create a form [like this](https://codepen.io/freeCodeCamp/full/VPaoNP)?

**_Forms_** are the way that we send and retrieve information on the web.
* Whenever you log in to Facebook, search for a video on YouTube, or add something to your cart on UberEats, you are submitting a form!

**HTTP** (or Hypertext Transfer Protocol) defines a set of rules for _how_ data is formatted and transmitted over the internet. We'll learn more about this in Unit 7 but here is the basic idea:
* A user submits a form and they are either **sending information** to a server or **requesting information** from a server.
* There are two "methods" that HTTP requires us to specify
    * POST: send
    * GET: request
* Learn more about HTTP [here](https://www.youtube.com/watch?v=kBXQZMmiA4s)

Forms are wrapped in a `<form>` tag. This tag _typically_ contains two attributes:
* `method` - Indcates the HTTP method to be used (e.g. `"post"` or `"get"`) 
* `action` - Determines the location where the form information should be sent (e.g. the URL of our server).

```html
<form method="get" action="./handle_action.php">
    <!--Input elements / submit button go here-->
</form>
```
   
> For now, we want to focus on how to build forms without actually sending an HTTP message. Our forms can leave these attributes out and we'll return to using these attributes to build functional forms later. 

### Inputs

* There are a number of different `<input>` types that one can use to place hard or soft boundaries on the type of data that a user submits.


```html
<form action="#">
    <label for="name">Name</label>
    <input type="text" name="name" placeholder="Ben Spector">
    
    <input type="submit" name="submit" value="Submit">
</form>
```


Forms, by default, are relatively unstructured. We can use semantic elements such as `<fieldset>`, `<legend>`, and even `<section>`, `<ul>`, and `<li>` to structure our form.

## Code-a-long
1. `<form>`
2. `<input type="text" name="name">`
3. `<input type="date" name="birthday">`
4. `<label for="name">Name</label>`
5. `<fieldset>` and `<legend>`
6. `<textarea name="">`
    * The `rows` and `cols` attributes are alternatives to `width`/`height`
    * The `placeholder` attribute
    * CSS: `resize: none`
7. `<input type="checkbox">`
    * One `<label>` per checkbox is typical.
8. `<input type="radio">`
    * One `<label>` per radio option is typical.
    * The `checked` attribute
9. `<select name="">` and `<option value="">`
    * The `selected` attribute 

Finally...
10. `<input type="submit" value="Fire Away!" />`

#### Now on to styling...
How do we get our form to look like [_this_](https://codepen.io/freeCodeCamp/full/VPaoNP)?

See the styling in the example `index.css` [on Github](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-4-forms/example/index.css).
