# DOM API

### DOM (Document Object Model)
- A tree of nodes and elements that make up a webpage
- Types of nodes
  * document 
  * text node
  * comment node 
  * **HTML element**
  
### API (Application Programming Interface)
  - A bunch of methods and properties we can use to interact with the DOM 
  - UI (User interface) is for your average user
  - API is for developers, programmers, and programs to use!

### So What is the DOM API?
- DOM API is a way to interact with the DOM (live webpage)
- DOM API is a _specific_ API use to manipulate or modify the webpage programmatically 
- DOM API can perform methods or properties that will manipulate our webpage 


# Fun Re-writing Wikipedia 
- Right click and inspect the HTML element
- We can grab certain elements by traversing the tree, but that takes forever!

### Reading Elements (Selecting from the DOM)

| Selector name                   | Return shape   | Return type    | Reference             | forEach? |
| ------------------------------- | -------------- | -------------- | --------------------- | -------- |
| `node.getElementById()`         | Single element | Element        | https://goo.gl/8cHGoy | N/A      |
| `node.getElementsByClassName()` | Collection     | HTMLCollection | https://goo.gl/qcAhcp | No       |
| `node.getElementsByTagName()`   | Collection     | HTMLCollection | https://goo.gl/QHozSh | No       |
| `node.querySelector()`          | Single element | Element        | https://goo.gl/6Pqbcc | N/A      |
| `node.querySelectorAll()`       | Collection     | NodeList       | https://goo.gl/vTfXza | Yes      |

### Updating elements (Setting their properties)
- `.innerText`
- `.src`
- `.style` (We can access CSS properties by converting them to camelCase)
- `innerHTML`


### Lab Review... Review...
What are the 5 DOM API methods we went over this morning to allow us to select HTML elements?
- getElementsByTagName()
- getElementById()
- getElementsbyClassName()
- querySelector()
- querySelectorAll()

Once we have selected (and saved in a variable) an element, what can we modify about it?
- it's text (.innerText)
- style (.style)
- image source (.src)
- inner tag/make more elements (.innerHTML)



## CRUD Practice 
- Create DOM elements
- Read DOM elements (selecting elements)
- Update DOM elements
- Delete DOM elements

### Creating elements 
- `.innerHTML`
- `document.createElement()`
- `parentNode.append()`

### Removing elements
- `node.remove()`

## Pixel Art Activity