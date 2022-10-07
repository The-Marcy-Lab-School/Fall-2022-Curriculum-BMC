# Unit 1 Lesson 3 - Tables

## Table Elements

* `<table>` — container of a table
* `<tr>` - a table row
* `<td>` - table data values
* `<thead>` - typically contains the first row
* `<tbody>` - contains every other row
* `<tfoot>` - contains a footer row

![](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-3-tables_lists/unit-1-table-diagram.png?raw=true)

## Code-a-long Guide

In this code along, we'll use HTML tables and CSS to recreate [this spreadsheet](https://docs.google.com/spreadsheets/d/1MJ6bAkZamUeOTdQvEkqUzWp_6Ms2kNq26785hhpqx0Y/edit#gid=0). 

1. Every table begins with the `<table>` element which we can fill with table rows (`<tr>`) and table data (`<td>`).

```html
<table>
  <tr>
    <td>Data A1</td>
    <td>Data B1</td>
  </tr>
  <tr>
    <td>Data A2</td>
    <td>Data B2</td>
  </tr>
</table>
```


2. Adjust `width` and `height` of rows and columns.
  ```css
  tr { /* Set the height of rows*/
    height: 100px;
  }
  
  td { /* Set the width of columns */
    width: 100px;
  }
  ```

3. Which tables elements can have a border? What about padding and margin in our table cells?

  Add and collapse borders by targeting table and all of it's descendants.

  ```css
  table, table * {
    border: 1px solid black;
    border-collapse: collapse;
  }
  ```
  The default `border-collapse` property is `seperate` and has some thin white space seperating each cell. The `border-spacing` property determines how much space separtes each cell.

4. Play around with text alignment by targeting the `text-align` property of the `td` element.
  ```css
  td {
    text-align: center;
  }
  ```
  
  Play around with background colors.

  ```css
  table {
    background-color: gray;
  }
  ```
  
5. We can use table headers (`<th>`) and separate the first first row from the rest using `<thead>` and `<tbody>`. Your table structure will typically look like this (look familiar?):

  ```html
  <table>
    <thead></thead>
    <tbody></tbody>
  </table>
  ```

6. Add `scope` attributes to `<th>`s and then target those attributes for styling using an attribute selector.
  ```html
  <th scope="row">1st Period</th>
  ```
  ```css
  th[scope="row"] {
    background-color: #0b0775;
    color: #ffffff;
  }
  ```

  > This will target `th` elements with a `scope="row"` attribute. 
  
  ```html
  <th foo="bar">Some text</th>
  ```
  ```css
  [foo="bar"] {
    background: deeppink;
  }
  ```

  > Note: We can make up our own attributes and target them on their own.

7. Add `<colgroup>` elements and demonstrate how that facilitates styling targeted at table _columns_.
  ```html
   <colgroup>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
    </colgroup>
  ```

8. Add an ID to a `<col>` and target it for styling that way.

9. Use the `:nth-child` **pseudo-class** ([docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)) to target another column.
  ```css
  col:nth-child(3) {
    background-color: #e9e9e9;
    width: 200px;
  }
  ```

10. Mark up the table with `<thead>`, `<tbody>`, `<tfoot>`. Talk over the accessibility benefits.

11. Demonstrate`colspan` attribute.
  ```html
   <tfoot>
      <tr>
        <td colspan="8">This is the footer</td>
      </tr>
   </tfoot>
  ```

12. Target the `<tfoot>` element to give the footer a common background color.
  ```css
  tfoot {
    background-color: #e9e9e9;
  }
  ```

13. Demonstrate`rowspan` attribute.
  ```html
  <th rowspan="2" scope="row">3rd Period</th>
  ```


