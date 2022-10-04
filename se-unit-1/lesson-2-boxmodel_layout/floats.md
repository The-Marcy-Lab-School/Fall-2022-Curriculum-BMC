# Objectives
Fellows will...
* Understand the intended purpose of the CSS `float` property.
* Understand the _legacy_ method of using `float`s to layout pages.
* Understand when a _clearfix_ is necessary and how to implement one.

# The Why
* The CSS `float` properly was originally intended for floating images inside of blocks of text.
* Developers began to use it to create multi-column page layouts.
* With the introduction of CSS Grid and Flexbox, this "hack" is no longer necessary and thus is considered _legacy technique_.
* Floats are still valuable when used for their intended purposes and can help add structure to your webpage.
* Elements float within their immediate container, which puts a limit on how far the browser can move the floated element. 
  * If you float two elements in a row in the same direction, their vertical edges (counting their margins) will touch, providing they fit in the same row.
  * Any whitespace (other than margins and padding) that would otherwise appear between the elements will collapse.
* The browser removes floats from the normal document flow, and that means the container no longer contains the floated items.
  * The boxes of subsequent items actually run _behind_ the float.
  * Hence, the browser cannot determine the container's height, so it can't render the container correctly.
  * Solution: `overflow: hidden` (or `overflow: auto`) is the simplest way to clear a floated element. 
    * Apply the property to the container element and watch it expand to wrap your floated elements.

* Instead of an `overflow` propery, a *clearfix* can be applied to a container.
  * A clearfix is a standard pattern that developers use to ensure a container doesn't lose its floated children. 
  * It employs an invisible block element as the last child element of the container and the clear property.

# To See in Action
1. Create a container.
2. Add photo and add lipsum.
3. Float the photo
4. Add some margin to the photo and a background to the container to see how the container runs _behind_ the float.
5. Implement a clear fix to ensure that the container holds the entire floated photo.
