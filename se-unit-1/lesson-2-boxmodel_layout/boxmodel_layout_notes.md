# Boxmodel and Layout Foundations Notes

## Agenda and Overview

* **0:00 - 0:05** | Introduction / The why
* **0:05 - 0:25** | CSS review / Box Model
* **0:25 - 0:35** | Visual formatting Model / Block, Inline, and Inline-Block elements
* **0:35 - 0:60** | Box Sizing / Dimensions / Images / Float / Position

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

* According to the box model concept, every element on a page is a rectangular box and may have width, height, padding, borders, and margins.

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

* The `width` and `height` define how much horizontal and vertical space it needs for the content area of the box, which may or may not include the padding and borders. In most cases, the browser can determine the width and height automatically.
* The `margin` property allows us to set the amount of space that surrounds an element. Margins for an element fall outside of any border and are completely transparent in color.
* The `padding` property is very similar to the margin property; however, it falls inside of an element’s border, should an element have a border. The padding property is used to provide spacing directly within an element.
* The `border` is a boundary that surrounds the padding.
* According to the box model, the total width of an element can be calculated using the following formula:
  `(margin-right + border-right + padding-right) + width + (padding-left + border-left + margin-left)`

### Box Sizing
* The `box-sizing` property can have two values: `content-box` and `border-box`.
* The `content-box` setting is default in all modern browsers. This is the standard box model. Padding and border are not included in element height or width
* With `border-box`, width and height are calculated inclusive of padding and border.
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

# The Visual Formatting Model
* The `display` property has almost thirty values, but `block`, `inline-block`, and `inline` are most used.
* Every element has a default display property value; however, as with all other property values, that value may be overwritten. `<p>`, for example is `display: block` by default.

![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-2-boxmodel_layout/images/display-example.png?raw=true)

```html
<p>This is display: block and unsized</p>
<p class='sized'>This is display: block. It is sized</p>
<p class='inline sized'>This is inline</p>
<p class='inline'>Width/height have no effect</p>
```
 
```css
p { border: 1px solid black; }
.sized { width: 50%; height: 30px; }
.inline { display: inline; } 
```

## Block elements
* _block elements_ (headings, paragraphs, sections, tables, forms, etc) by default occupy all horizontal space available within its container, with nothing to its left or right.
* If a page contains 3 block elements directly inside the `body` and nothing else, then all three elements will display one above the other like a stack of blocks.
* `block` elements use the box properties (width, height, margin, padding, border) to determine size of the element.
* Though a block element takes up an entire row, its width is not altered to do so. If a `div` is 500px in a 900px `section`, the remaining 400px will remain empty.
* Most elements are block by default!

## Inline elements
* Inline elements provide some semantic meaning to content (`span`, `b`, `strong`, `em`,*`img`* etc)
* inline elements handle the dimension properties (width, height, padding, border, and margin) differently from the way block elements treat them.
* Browsers handle left and right margins and padding for inline elements in the same way as for block elements, but they process other box model properties differently.
* For inline elements, browsers:
  * ignore the width and height properties (except with the img element), but instead use values computed from the element content.
  * ignore top and bottom margins.
  * padding and borders may extend into rows above and below but will not interfere or shift them but overlap them. See [example](http://d3jtzah944tvom.cloudfront.net/202/images/lesson_2/the-visual-formatting-model-01.png)

## Inline-Block elements
* `inline-block` elements act just like `block` elements except they do *not* take up the entire row by default. Thus, you can place `inline-block` elements side-by-side.
* `inline-block` elements observe the `width` and `height` properties. Padding, margin, and boder all work as they do with `block` elements.
* Note: *`img` elements are NOT `inline-block`. They are `inline` by default.*
* Browsers use the `vertical-align` property to perform vertical alignment for adjacent `inline-block` elements.

## Margin collapse
* Top and bottom margins "collapse" between `block` elements, meaning if you position two adjacent `block`s one above the other, the margin between them isn't thesum of the top and bottom margins. Instead, the margin _collapses_ to the larger of the two.
* Margin collapse only happens with top and bottom, not left and right margins.

# Dimensions
* `px`, `rem`, `%` called measurement units

## Absolute Units
*  CSS distinguishes between a physical pixel (also device pixel or display pixel) and what we call the *CSS reference pixel* (or CSS pixel or reference pixel).
*  The size of a reference pixel is the size of a pixel on a display that has 96 pixels per inch. 

## Relative Units
## Ems and Rems
* Ems and rems are proportional to the calculated and root font sizes, respectively. The calculated font size is the height of the current font in pixels. 
* The root font size is the height of the base font for the document: the font size designated for the html element. 
* If the calculated font size is 20 pixels and the root font size is 16 pixels, then 1.5em is 30px (20 * 1.5), while 1.5rem is 24px (16 * 1.5).
* You may find it easier to work with rems instead of ems since rems are consistent. Once you've set the root font size for a document, `1.5rem` means the same thing everywhere in that document. This relationship isn't true for ems; they compound.

## Auto
* The `auto` specificier, as a `width` or `length` tells the browser to try to fit the entire element including its margins in its container.
* As a left or right `margin` on a block element, it tells the browser to push the element all the way to the right or left.
  * You can center a `block` element by setting right and left `margin` to `auto`.
* As a top or bottom `margin`, `auto` is equal to 0.
* Helpful diagram illustrating difference between `width: auto` and `width: 100` 

![](http://d3jtzah944tvom.cloudfront.net/202/images/lesson_2/measurement-units-02.png)

# Images

## JPG
* The jpg format uses a _lossy_ form of compression, in other words, it trades off image quality for file size.
* If you edit a jpg, the resulting file has less detail than the original. If you edit again it loses even more detail.
* You can set loss levels when saving a jpeg.
* In general, jpgs don't work well for CSS backgroung images.

## PNG
* PNGs use compression but it is non-lossy. Lack of lossiness means larger file size.
* pngs are ideal for images that need their details.

## The img element
* `<img>` is a self-closing tag. It has two attributes: `src` and `alt`

# Floats
* Elements float within their immediate container, which puts a limit on how far the browser can move the floated element. 
  * If you float two elements in a row in the same direction, their vertical edges (counting their margins) will touch, providing they fit in the same row.
  * Any whitespace (other than margins and padding) that would otherwise appear between the elements will collapse.

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

# Positioning
## Offset Properties
* `top`, `bottom`, `left`, `right`
* Each offset measures the inward distance from the side of the container named by the offset property. 
* For instance, `bottom: 50px` indicates a position 50px inward from (above) the bottom edge of the container. 
* _* Remember that the offset is always inward when working with positive offset values. Negative offsets shift elements in the opposite direction.*_

## The `position` property
### `position: static`
* The default. statically positioned items are part of the page flow. 
* They appear in the same order they appear in the markup. 
* The offset properties do not affect static elements.

### `position: relative`
* Relative positioning moves an element to a new position relative to where the browser would otherwise put it. 
* For example, if you include `left: 50px` and `bottom: 100px` with `position: relative`, the browser will shift the element 50px inward from the left edge and 100px upward from the bottom edge from where the browser would place it otherwise.
* *Relative positioning does not remove an item from the document flow.* 
  * The browser positions the next element as though the previous one still occupied its pre-offset location.

### `position: absolute`
* Absolute positioning causes the browser to move the element to a new position within a container element.
* By default, the container is the nearest ancestor element that has a `relative`, `absolute`, or `sticky` position
* If no ancestor container is present, `body` is used.
* *Absolute positioning removes elements from the normal document flow.* No matter where you position it, the browser won't treat that space as occupied space.

### `position: fixed`
* Fixed positioningsets an element to a fixed position within the window. 
* The element does not move if the user scrolls the page. (Think navigation bar at the top of a page.)
