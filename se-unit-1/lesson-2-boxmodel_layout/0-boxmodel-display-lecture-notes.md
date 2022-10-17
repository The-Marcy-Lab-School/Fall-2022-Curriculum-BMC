# Boxmodel and Layout Foundations Notes

## Table of Contents
* [Agenda and Overview](#agenda-and-overview)
* [The Why](#the-why)
* [CSS](#css)
* [The Box Model](#the-box-model)
    * [Box Sizing](#box-sizing)
* [The Display Property](#the-display-property)
    * [Block](#block)
    * [Inline](#inline)
    * [Inline-Block](#inline---block)

## Agenda and Overview

* **0:00 - 0:05** | Introduction / The why
* **0:05 - 0:20** | CSS review + specificity
* **0:20 - 0:40** | Box Model + Box Sizing
* **0:40 - 0:60** | Visual formatting Model / Block, Inline, and Inline-Block elements

## The Why...

![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-0-semantics/images/div-boxes.gif?raw=true)

Yesterday we talked about how we need to start thinking about the structure of what we are working on. 
1. Visualizing the boxes is the first part
2. Structuring the order of the boxes in HTML is the second part
3. Understanding how you will arrange them on your page using CSS is the final part.

## CSS

* Called _cascade_ because all styles cascade from the top of a stylesheet to the bottom, allowing different styles to be added or overwritten.
  * The _cascade_ works inside individual selectors as well.
   ```CSS
    p {
        background: red;
    }
    p {	
        background: orange;
        background: green;
    }
   ```
   > In this example, the second set of `p` rules override the first. Inside the second set, since the green background declaration comes after the orange, it will override it.

* Selectors have **specificity weights** that determine which styles are applied when there is a conflict. Specificity point values can be visualized using three columns. 
    * The type selector has the lowest specificity weight and holds a point value of 0-0-1. 
    * The class selector has a medium specificity weight and holds a point value of 0-1-0. 
    * Lastly, the ID selector has a high specificity weight and holds a point value of 1-0-0.
* The higher the specificity weight of a selector, the more superiority the selector is given when a styling conflict occurs.

    ![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-2-boxmodel_layout/images/css-specificity.png?raw=true)
    > [Live code](https://jsbin.com/negufugite/1/edit?html,css,output)
    

## The Box Model

According to the box model concept, every element on a page (every `<p>`, `<img>` and `<div>`) is a rectangular box that has a width and a height. This is known as the **content box**. In addition, every content box can have 

* **padding**: the space around the content box.
* **border**: a layer outside of the padding.
* **margin**: the space outside of the border and between other elements. 

![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-2-boxmodel_layout/images/box-model.png?raw=true)

* Each part of the box model corresponds to a CSS property: width, height, padding, border, and margin.

    ```CSS
    div {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 6px solid black;
      margin: 20px;
    }	
    ```
    
    ![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-2-boxmodel_layout/images/box-model-rendered.png?raw=true)

* The `width` and `height` define how much horizontal and vertical space it needs for the content area of the box, which may or may not include the padding and borders. In most cases, the browser can determine the width and height automatically.
* The `margin` property allows us to set the amount of space that surrounds an element. Margins for an element fall outside of any border and are completely transparent in color.
* The `padding` property is very similar to the margin property; however, it falls inside of an element’s border, should an element have a border. The padding property is used to provide spacing directly within an element.
* The `border` is a boundary that surrounds the padding.
* According to the box model, the total width of an element can be calculated using the following formula:
  `(margin-right + border-right + padding-right) + width + (padding-left + border-left + margin-left)`

### Box Sizing
* The `box-sizing` property can have two values: `content-box` and `border-box`.
* The `content-box` setting is default in all modern browsers. The `width` and `height` properties define the size of the inside-most "content box". Padding and border are added to an element's total height or width.
* With `border-box`, `width` and `height` define the size of the "border box". Any border and padding will push the content box inward.
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
* The `display` property has almost thirty values, but `block`, `inline-block`, and `inline` are most used.
* Every element has a default display property value; however, as with all other property values, that value may be overwritten. `<p>`, for example is `display: block` by default.

> [Live Code](https://jsbin.com/ropeyon/2/edit?html,css,output)

## Block
* _block elements_ (headings, paragraphs, sections, tables, forms, etc) by default occupy all horizontal space available within its container, with nothing to its left or right.
* If a page contains 3 block elements directly inside the `body` and nothing else, then all three elements will display one above the other like a stack of blocks.
* `block` elements use the box properties (width, height, margin, padding, border) to determine size of the element.
* Though a block element "takes up" an entire row, its width is not altered to do so. If a `div` is 500px in a 900px `section`, the remaining 400px will remain empty.
* Most elements are block by default!

**When to use `display:block`**: Any time that you want to have an element on its own line.

## Inline
* Inline elements provide some semantic meaning to content (`span`, `b`, `strong`, `em`,*`img`* etc)
* For inline elements, browsers:
  * ignore the width and height properties (except with the img element), but instead use values computed from the element content.
  * ignore top and bottom margins.
  * padding and borders may extend into rows above and below but will not interfere or shift them but overlap them.
 
**When to use `display:inline`**: For inserting an element within an existing line of text content. Typically, this is done with `span`, `b`/`strong`, and `i`/`em` which are all `display:inline` by default.

## Inline-Block
* `inline-block` elements act just like `block` elements except they do *not* take up the entire row by default. Thus, you can place `inline-block` elements side-by-side.
* `inline-block` elements observe the `width` and `height` properties. Padding, margin, and boder all work as they do with `block` elements.
* Note: *`img` elements are NOT `inline-block`. They are `inline` by default.*
* Browsers use the `vertical-align` property to perform vertical alignment for adjacent `inline-block` elements.

**When to use `display:inline-block`**: Buttons in a navigation bar!

## Margin collapse
* Top and bottom margins "collapse" between `block` elements, meaning if you position two adjacent `block`s one above the other, the margin between them isn't thesum of the top and bottom margins. Instead, the margin _collapses_ to the larger of the two.
* Margin collapse only happens with top and bottom, not left and right margins.
