# Positioning
## Offset Properties
* `top`, `bottom`, `left`, `right`
* Each offset measures the inward distance from the side of the container named by the offset property. 
* For instance, `bottom: 50px` indicates a position 50px inward from (above) the bottom edge of the container. 
* _* Remember that the offset is always inward when working with positive offset values. Negative offsets shift elements in the opposite direction.*_

## The `position` property

### Offset Properties

Positioning always utilizes the four CSS properties `top`, `bottom`, `left`, and `right`. 

These are called "offset properties" — they shift an element a specified distance from their original position. It is easiest to think of these properties as "Distance _inward_ from the specified side". 

<img src="https://docs.google.com/drawings/d/e/2PACX-1vSYLzZv9pmKiok87Gs9_dsYUc94wbSOa48Tl1MHsgQKrNAjlCOU-YjOq9X4aqdRi8QOIdeoYZOwuQj9/pub?w=344&amp;h=352">

```css
.box {
    position: relative;
    top: 100px;
    left: 100px;
}
``` 
> In this example, we are shifting the box element `100px` inward (down) from the top and `100px` inward (right) from the left.

You can use any unit of measurement (`px`, `em`, `rem`, `%`) and you can use positive or negative values.

> 💡 Check out this [Awesome Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

### Static
* The default. statically positioned items are part of the page flow. 
* They appear in the same order they appear in the markup. 
* **The offset properties do not affect static elements.**

### Relative
* Relative positioning moves an element to a new position relative to where the browser would otherwise put it. 

```css
.box {
    position: relative;
    top: 100px;
    left: 100px;
}
```
> This example will move the box `100px` downward from the top and `100px` inward from the left (`100px` to the right) from where the broswer would place it otherwise.

* *Relative positioning does not remove an item from the document flow.* 
  * The browser positions the next element as though the repositioned element still occupied its pre-offset location.

### Absolute
* Absolute positioning causes the browser to move the element to a new position within a container element.
* By default, the container is the nearest ancestor element that has a `relative`, `absolute`, or `sticky` position. If none exists, the `<body>` element is used as the reference.

```css
.parent {
    position: relative;
}
.box {
    position: absolute;
    top: -100px;
}
```
> This example will move the box `100px` upward from where it was originally placed within its parent.

* *Absolute positioning removes elements from the normal document flow.* No matter where you position it, the browser won't treat that space as occupied space.

### Fixed
* Fixed positioning sets an element to a fixed position within the browser window (a.k.a. the "viewport"). 
* Similar to `position: absolute:` however the "parent" element is always the viewport
* The element does not move if the user scrolls the page. (Think navigation bar at the top of a page.)
* Fixed positioning removes element from the normal document flow.

### Sticky
* Elements with sticky positioning are weird... They behave like `position: relative` until they "stick" to a certain position within its _nearest scrolling ancestor_. Then, it behaves like `position: fixed`, but only as long as the parent element is visible.

![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-2-boxmodel_layout/images/position-sticky.gif?raw=true)

```css
.box {
    position: sticky;
    top: 10px;
}
```
> In this example, once the box's `top` position reaches `10px` below the top of the nearest scrolling ancestor, it will "stick" in place and behave like a fixed element and other content will flow underneath.

### Z-index

The `z-index` property determines that order that positioned elements stack on top of each other.

* Elements with higher `z-index` values will be placed on top of elements with lower `z-index` values:
* `z-index` values are just numbers without any units.

```css
.box1 { z-index: 3 }
.box2 { z-index: 2 }
.box3 { z-index: 1 }
```
> In this example, the element with class `box1` will be in front of `box2` which is in front of `box3`. 

<img src="https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-2-boxmodel_layout/images/z-index.png?raw=true" width="500px" />

> Note that `z-index` values do not have to be sequential — there can be gaps. This is a good idea to give yourself some flexibility.
