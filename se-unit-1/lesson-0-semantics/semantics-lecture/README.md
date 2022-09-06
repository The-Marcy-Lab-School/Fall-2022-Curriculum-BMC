# Lesson 0: Semantic HTML/CSS

## Objectives
Fellows will...
* Structure HTML using HTML5 semantic tags
* Understand the difference between semantic and non-semantic HTML and CSS
* Be able to articulate the benefits of writing semantic code.
* Open, edit, and preview and HTML file their browsers

## Vocabulary
* semantic
* non-semantic
* element
* structural elements

## The Why?
* _Semantic_ in HTML and CSS refers to code that gives the page meaning based on content as opposed to it's physical appearance on the page.
* The release of HTML5 in 2014 came with new semantic tags that allow devs to better define the structure of the page and to group related elements.
* Structurally semantic tags include: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<main>`
* Other new semantic tags include: `<figure>`, `<figcaption>`, `<blockquote>` 
* Lastly, we are very familiar with the following semantic tags: `<p>`, `<h1>`...`<h6>`, `<ul>`, `<li>`, `<strong>`, `<em>`
* Non-semantic tags: `<div>`, `<span>`, `<b>`, `<i>`
* Why Semantics are dope:
  1. More readable code. Very helpful when working on teams.
  2. Accessibility. Screen readers can better navigate websites written in semantic HTML
  3. Semantic HTML is search-engine optimized. Search engines can better recognize key parts of your website when they are signaled with semantic HTML. This could help in the search rankings.
  4. Makes styling easier/more efficient. When you target elements based on the structure and meaning of their content _instead_ of how it appears, it will be easier to make uniform style changes to like elements in the future. 

## Lecture: Code-a-Long - Our Landing Page Mockup
* We will recreate [our Tribute Page](https://codepen.io/freeCodeCamp/full/zNqgVx) together! But we can make some fun styling changes along the way!
* We will download the [Page Ruler Chrome Extension](https://chrome.google.com/webstore/detail/page-ruler/emliamioobfffbgcfdchabfibonehkme) to get precise pixel measurements.
* We will use the following elements in our page:
* We will also download the [Eye Dropper Chrome Extension](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka) to find exact colors.

### Our Process
1. Structure page with HTML. We will use:
  * `body`
    * `main`
      * `h1`
      * `p`
      * `figure`
        * `figcaption`
      * `section`
        * `h2`
        * `ul`
          * `li` **be sure to target juice with an `id`**
      * `blockquote`
        * `p`
        * `cite` 
      * `h2` and `a`

2. Style the page
  * Set the background colore of the `body`
  * Set width of `main`
  * Set `section` and `article` to `display: inline-block`
  * Set `section` and `article` to `max-height: fill-available`
  * Set background colors
