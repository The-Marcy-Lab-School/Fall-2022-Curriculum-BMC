# Boxmodel and Layout Foundations Notes

Open up Cloud9 before we get started!

## Table of Contents
* [Agenda and Overview](#agenda-and-overview)
* [Box Model and Display Review](#box-model-and-display-review)
* [Dimensions](#dimensions)
* [Images](#images)
* [Floats](#floats)

## Agenda and Overview

* **0:00 - 0:30** | Box Model + Display Review
* **0:30 - 0:40** | Dimensions
* **0:40 - 0:50** | Floats
* **0:50 - 0:60** | Position

## Box Model and Display Review

### Code Along Setup

1. Open up Cloud9
2. `cd` into `Unit-1` (make the directory if you don't have one already)
3. Use `mkdir` to create a new folder `box-model-review/`
4. `cd` into `box-model-review/`
5. Use `touch` to create two files: `index.html` and `index.css`
6. Copy and paste the following HTML.

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="index.css" type="text/css" />
    </head>
    <body>
        <div>
            <p>Hello World</p>
        </div>
        <div>
            <p>Hello World</p>
        </div>
    </body>
</html>
```

7. Save your code and Preview. Then, pop out into a new window.

**Turn and Talk:**
* What kind of HTML do we put inside the `<head>` and what kind of HTML do we put inside the `<body>`?
* What does the `<link>` tag do?
* What do we call the relationship between the `<p>` element and the `<div>` element? For example: The `<p>` element is _nested_ inside the `<div>` element. That means that we can say "`<p>` is a _____ of `<div>`".
* What do we call the relationship between the two `<div>` elements?

## CSS Cascading + Specificity

**Practice:**
1. In your `index.css` file, define a new rule that says "All divs should be 100x100 boxes that have the background color `coral` and text color `purple`"
2. Save your code and refresh your preview.
3. Add a class attribute called `"reverse"` to the first `<div>` element. Then, style it such that elements with the `"reverse"` class attribute have a `purple` background color.
4. Finally, make the paragraph that is inside the `<div>` with the class `"reverse"` have text color `coral`.
5. Save your code and refresh your preview.


**Review**

Selectors have **specificity weights** that determine which styles are applied when there is a conflict. Specificity point values can be visualized using three columns. 
* The type selector has the lowest specificity weight and holds a point value of 0-0-1. 
* The class selector has a medium specificity weight and holds a point value of 0-1-0. 
* Lastly, the ID selector has a high specificity weight and holds a point value of 1-0-0.

The higher the specificity weight of a selector, the more superiority the selector is given when a styling conflict occurs.

![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-2-boxmodel_layout/images/css-specificity.png?raw=true)
> [Live code](https://jsbin.com/negufugite/1/edit?html,css,output)
    

## The Box Model

**Turn and Talk:**
* Aside from `width` and `height`, what are the three other box-model properties?

**Practice**: 

1. Add a class to the first `<div>` called `"border-box"`.
    * Hint: `<div class="class1 class2">`  
2. Add a CSS rule for the `.border-box` class that sets the `content-box` property to `border-box`.
3. Add the following properties to ALL `<div>` elements one by one:

    ```css
    border: 5px solid black;
    padding: 10px;
    margin: 20px;
    ```

4. Then, right-click and "Inspect". Scroll down to the bottom of the CSS section to see the box model of each element.

**Review:**

According to the box model concept, every element on a page is a rectangular box and may have width, height, padding, borders, and margins.

![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-2-boxmodel_layout/images/box-model.png?raw=true)

Each part of the box model corresponds to a CSS property: width, height, padding, border, and margin.

```CSS
div {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 6px solid black;
  margin: 20px;
}	
```

The `box-sizing` property determines the way we calculate how much space an element takes up. It can have two values: 
* `content-box` - The default. Calculate width/height by adding all box-model values together.
* `border-box` - The `width`/`height` property is the width/height of the element. The "inner" size of the element shrinks if you add padding, or border
* The `border-box` setting is "best" since it simplifies the math a front-end developer must do. For example, if we have a box with a width of 50% and padding of 12px; border-box ensures that it's precisely 50% of the container width, not 50% plus 24-pixels.

![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-2-boxmodel_layout/images/border-box-2.png?raw=true)

* The code below can be used to set `border-box` everywhere.
```CSS
html {
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}
```

# The Display Property

**Turn and Talk**
* The `<div>` elements are currently stacked on top of each other. That means that they have _what_ `display` property value?
* If you wanted them to be on the same line, what property value use?

**Review:**
* The `display` property has almost thirty values, but `block`, `inline-block`, and `inline` are most used.
* Every element has a default display property value; however, as with all other property values, that value may be overwritten. `<p>`, for example is `display: block` by default.
    * [Block and Inline Element Defaults](https://www.w3schools.com/html/html_blocks.asp)

## Block elements
* _block elements_ (headings, paragraphs, sections, tables, forms, etc) by default occupy all horizontal space available within its container, with nothing to its left or right.
* If a page contains 3 block elements directly inside the `body` and nothing else, then all three elements will display one above the other like a stack of blocks.
* `block` elements use the box properties (width, height, margin, padding, border) to determine size of the element.
* Though a block element "takes up" an entire row, its width is not altered to do so. If a `div` is 500px in a 900px `section`, the remaining 400px will remain empty.
* Most elements are block by default!

**When to use `display:block`**: Any time that you want to have an element on its own line.

## Inline elements
* Inline elements provide some semantic meaning to content (`span`, `b`, `strong`, `em`,*`img`* etc)
* For inline elements, browsers:
  * ignore the width and height properties (except with the img element), but instead use values computed from the element content.
  * ignore top and bottom margins.
  * padding and borders may extend into rows above and below but will not interfere or shift them but overlap them.
 
**When to use `display:inline`**: For inserting an element within an existing line of text content. Typically, this is done with `span`, `b`/`strong`, and `i`/`em` which are all `display:inline` by default.

## Inline-Block elements
* `inline-block` elements act just like `block` elements except they do *not* take up the entire row by default. Thus, you can place `inline-block` elements side-by-side.
* `inline-block` elements observe the `width` and `height` properties. Padding, margin, and boder all work as they do with `block` elements.
* Note: *`img` elements are NOT `inline-block`. They are `inline` by default.*
* Browsers use the `vertical-align` property to perform vertical alignment for adjacent `inline-block` elements.

**When to use `display:inline-block`**: Buttons in a navigation bar!

![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-2-boxmodel_layout/images/display-example.png?raw=true)

> [Live Code](https://jsbin.com/dekenikuqa/2/edit?html,css,output)

> [w3schools code example](https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1)

## Margin collapse
* Top and bottom margins "collapse" between `block` elements, meaning if you position two adjacent `block`s one above the other, the margin between them isn't thesum of the top and bottom margins. Instead, the margin _collapses_ to the larger of the two.
* Margin collapse only happens with top and bottom, not left and right margins.

# Dimensions
* `px`, `rem`, `em` and `%` are called "measurement units"
* `px` is an "Absolute Unit" 

> 💡 Fun Fact! CSS distinguishes between a physical pixel (also device pixel or display pixel) and what we call the *CSS reference pixel* (or CSS pixel or reference pixel).The size of a reference pixel is the size of a pixel on a display that has 96 pixels per inch. 

* `rem`, `em`, `%` are "Relative Units"

* `em`s are proportional to the calculated font size of the parent element
    * If a parent element has a `font-size: 16px` then `2em` is equivalent to `32px`.
* `rem`s are proportional to the root font size set on the `html` element.
    * If the `html` element has a `font-size: 12px` then `2rem` is equivalent to `24px`.
* You may find it easier to work with rems instead of ems since rems are consistent. Once you've set the root font size for a document, `1.5rem` means the same thing everywhere in that document. This relationship isn't true for ems; they compound.

## Auto
* The `auto` specificier, as a `width` or `length` tells the browser to try to fit the entire element including its margins in its container.
* As a left or right `margin` on a block element, it tells the browser to push the element all the way to the right or left.
  * You can center a `block` element by setting right and left `margin` to `auto`.
* As a top or bottom `margin`, `auto` is equal to 0.
* Helpful diagram illustrating difference between `width: auto` and `width: 100` 

![](http://d3jtzah944tvom.cloudfront.net/202/images/lesson_2/measurement-units-02.png)

> Imagine that the light blue box (the "container") is 100px wide. A `width: auto` property will fit the entire child element inside the parent div. A `width: 100%` property will set the content size to be the same as the parent (`100px`). With `box-sizing: content-box` this means that the internal content will be `100px` wide and padding/border/margin will extend outside of the parent. With `box-sizing: border-box`, the entire element will be `100px` wide, but will still extend outside of the parent due to `margin-left`.

# Images

## JPG vs. PNGs
* The `.jpg` format uses a _lossy_ form of compression, in other words, it trades off image quality for file size.
    * In general, `.jpg` files don't work well for CSS background images.
* The `.png` format uses compression but it is non-lossy. Lack of lossiness means larger file size.
    * `.png` files are ideal for images that need their details.

## The img element
* `<img>` is a self-closing tag. It has two attributes: `src` and `alt`

# Floats

```css
.floated-img {
    float: left;
}
```

* Elements float within their immediate container, which puts a limit on how far the browser can move the floated element. 
  * If you float two elements in a row in the same direction, their vertical edges (left/right sides) including their margins will touch, providing they fit in the same row.
  * Any whitespace (other than margins and padding) that would otherwise appear between the elements will collapse.
* Other elements will appear below the floated element **except for text**.

## Contain Floats
* The browser removes floats from the normal document flow, and that means the container no longer contains the floated items. 
  * Hence, the browser cannot determine the container's height, so it can't render the container correctly.
  * Solution: `overflow: hidden` (or `overflow: auto`) is the simplest way to clear a floated element. 
    * Apply the property to the container element and watch it expand to wrap your floated elements.

* Instead of an `overflow` propery, a *clearfix* can be applied to a container.
  * A clearfix is a standard pattern that developers use to ensure a container doesn't lose its floated children. 
  * It employs an invisible block element as the last child element of the container and the clear property.  
  
  ```css
    #columns::after { /* This rule is the clearfix */
    clear: both;
    content: "";
    display: block;
    }
  ```
  * In the example above, a new `block` child element (`""`) is added to the end of the #columns element.
  * The `clear: both` css property then has the new `block` element clear all floated elements. 
  * This empty/invisible `block` element sits below any floated elements, thus the container contains it. 
* *Note:* When you float an element, it uses as much space as it needs to display its content