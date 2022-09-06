# Unit 5 Lesson 1 Practice
## The DOM API and editing

**1. What is one difference between a NodeList and an HTMLCollection?**


**2. What does the following program log? Why?**

  ```html
  <html>
      <head>
          <h1 id="company">Dream Box</h1>
          <h2 id="ceo">Jessie Woolley-Wilson</h2>
      <head>
      <body>
          <p id="purpose"> DreamBox Learning is an online software provider that focuses on mathematics education.</p>
          <p id="chief-program-officer">Maya</p>
          <script src="script.js"></script>
      </body>
  </html>
  ```

  ```javascript
  const element = getElementById("ceo");
  const content = element.innerText
  console.log(content)
  ```


**3. Read the sample html code below. Describe what will happen when `myFunction` is invoked.**

  ```html
  <!DOCTYPE html>
  <html>
      <body>
          <h2 class="example">A heading with class="example" </h2>
          <p class="example">A paragraph with class="example".</p> 
          <script src="script.js"></script>
      </body>
  </html>
  ```
  
  ```javascript
  const myFunction = () => {
      document.querySelector(".example").style.backgroundColor = "red";
  }
  ```

**4. Write a function named `changeText` in order to:**

    * get the element with the id of `demo`
    * change the color of the element to green
    * and update the text to the future tech career of your choosing

  ```html
  <!DOCTYPE html>
  <html>
      <body>
          <p id="demo">This is a demo paragraph.</p>
          <script src="script.js"></script>
      </body>
  </html>
  ```


**5. Write a function named `addLunch` in order to:**

  * create an `li` node
  * this `li` should have text of "Bagged Lunch"
  * append the `li` node to the unordered list.
  * remove the "Add a lunch option" paragraph.

  ```html
  <!DOCTYPE html>
  <html>
    <body>
      <div id="activity">
        <p id="instructions">Add a lunch option</p>
        <ul id="myList">
          <li>IHop</li>
          <li>Drive Change</li>
        </ul>
      </div>
      <script src="script.js"></script>
    </body>
  </html>
  ```

**6. Write a JavaScript function to add rows to a table.**

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset=utf-8 />
      <title>Insert row in a table - w3resource</title>
    </head>
    <body>
      <table id="sampleTable" border="1">
        <tr>
          <td>Row1 cell1</td>
          <td>Row1 cell2</td>
        </tr>
        <tr>
          <td>Row2 cell1</td>
          <td>Row2 cell2</td>
        </tr>
      </table>
      <br>
      <script src="script.js"></script>
    </body>
  </html>
  ```

**7. Write a JavaScript program to display a random image from the following list.**

  * "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
  * "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
  * "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"
