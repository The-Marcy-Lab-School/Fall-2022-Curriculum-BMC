# Unit 1 Lesson 4: HTML Forms - Lecture Notes

While you wait, open up Cloud9 and do the following:
* `cd` into your `unit-1` directory.
* Create a new directory called `form-example` and `cd` into it.
* Create an `index.html` and `index.css` file.
* Use the HTML5 snippet and link your HTML and CSS files.

## Agenda

* **0:00-0:10** - Intro [Slides](https://docs.google.com/presentation/d/1n866k4TfpurI_w2Tea3B0Al4f1ScIFsACvpg5QtoTfE/edit#slide=id.g164868a7e6d_0_231)
* **0:10-0:20** - The What and the Why
* **0:20-0:55** - Code Along
* **0:55-0:60** - Flexbox Landing Page Milestones

### The What and the Why

How can I create a form [like this](https://codepen.io/freeCodeCamp/full/VPaoNP)?

**_Forms_** are the way that we send and retrieve information on the web.
* Whenever you log in to Facebook, search for a video on YouTube, or add something to your cart on UberEats, you are submitting a form!

**HTTP** (or Hypertext Transfer Protocol) defines a set of rules for _how_ data is formatted and transmitted over the internet. We'll learn more about this in Unit 7 but here is the basic idea:
* Every time you visit a website, say Google.com, you are sending an **HTTP request** that asks 
> "Hey google, can you send me your HTML, CSS, and JavaScript files?". 

* Google servers can then respond by sending you their files for your browser to render.
* We use **forms** on a webpage to make additional requests for information, or if we need to send information back to the server
* **Q: What kind of information might we want to send to a server?**
* Learn more about HTTP [here](https://www.youtube.com/watch?v=kBXQZMmiA4s)

### The Form Tag

Forms are wrapped in a `<form>` tag. 

```html
<form method="get" action="./handle_action.php">
    <!--Input elements / submit button go here-->
</form>
```

This tag _typically_ contains two attributes:
* `method` - Indicates the HTTP method to be used (`"post"` for sending information or `"get"` for requesting information)

* `action` - Determines the location where the form information should be sent (e.g. the URL of our server).
   
> For now, we want to focus on how to build forms without actually sending an HTTP message. Our forms can leave these attributes out and we'll return to using these attributes to build functional forms later. 

### Inputs

* Input fields go inside forms.
* There are a number of different `<input>` types that one can be used to set boundaries on the *type* of data that a user submits.


```html
<form action="#">
    <label for="name">Name</label>
    <input type="text" name="name" placeholder="Ben Spector">
    
    <input type="submit" name="submit" value="Submit">
</form>
```


Forms by default, are relatively unstructured. We can use semantic elements such as `<fieldset>`, `<legend>`, and even `<section>`, `<ul>`, and `<li>` to structure our form.

## Code-a-long

In your `index.html` file, create the following elements

1. `<form action="#">`
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
