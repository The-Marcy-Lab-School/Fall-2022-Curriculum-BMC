## The DOM API and editing

1. Compare and contrast a NodeList and an HTMLCollection?
   _Both interfaces are collections of DOM nodes. They differ in the methods they provide and in the type of nodes they can contain. Also, we can only run the forEach method on a NodeList. Finally, neither of these are actually arrays. So neither can use other array methods such as pop. push, shift, unshift, etc._ 

2. Write the output of the console.log() statement. Briefly explain your reasoning for writing this output. 
    _"Jessie Woolley-Wilson" would be logged to the console. This text is the innerText of the `<h2>` element that has an idea of "ceo"_


3. Read the sample html code below. Describe what will happen when `myFunction()` is invoked.
    _When myFunction is involed, the DOM will be queried to find an element with a selector of example. The `querySelector` method returns the first element with the specifed selector. In this case, that element is the `<h2>`.The style of this element will then be changed to have the background color of red._ 


4. 
  ```javascript
const changeText = () => {
     const element = document.getElementById("demo")
     element.style.color = "green"
     element.innerText = "Engineer"
}
  ```


5. 
  ```javascript
const addLunch = () => {
     const li = document.createElement("li")
     li.innerText = "Bagged Lunch"
     document.querySelector("ul").appendChild(li)
     const instructions = document.getElementById("instructions")
     instructions.remove()
}
  ```

6. 
  ```javascript
const addRow = (text1, text2) => {
     const row = document.createElement("tr")
     const td1 = document.createElement("td")
     const td2 = document.createElement("td")
     td1.innerText = text1 
     td2.innerText = text2 
     row.append(td1, td2)
     document.querySelector("table").appendChild(row)
}
  ```


7. 
  ```javascript
const randomImage = () => {
     let imageList = [
       {url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"},
       {url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"},
       {url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"}
     ]
     let image = document.createElement('img')
     let randomIndex = Math.floor(Math.random() * 3)
     image.src = imageList[randomIndex].url
     image.style.width = imageList[randomIndex].width
     image.style.height = imageList[randomIndex].height
     document.body.appendChild(image)
}
```
    
