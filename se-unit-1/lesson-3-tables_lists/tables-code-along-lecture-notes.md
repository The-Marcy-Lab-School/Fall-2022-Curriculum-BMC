# Unit 1 Lesson 3 - Tables

[Spreadsheet to recreate](https://docs.google.com/spreadsheets/d/1MJ6bAkZamUeOTdQvEkqUzWp_6Ms2kNq26785hhpqx0Y/edit#gid=0)

## Table Elements

* `<table>` — container of a table
* `<tr>` - a table row
* `<td>` - table data values
* `<thead>` - typically contains the first row
* `<tbody>` - contains every other row

## Code-a-long Guide

1. Adjust width and height of rows and columns.
  ```css
  td {
    width: 100px;
  }

  tr {
    height: 100px;
  }
  ```

2a. Which tables elements can have a border? What about padding and margin in our table cells?

2b. Add and collapse borders by targeting table and all of it's descendants.
  ```css
  table, table * {
    border: 1px solid black;
    border-collapse: collapse;
  }
  ```
The default `border-collapse` property is `seperate` and has some thin white space seperating each cell. The `border-spacing` property determines how much space separtes each cell.

3a. Play around with text alignment by targeting the `text-align` property of the `td` element.
  ```css
  td {
    text-align: center;
  }
  ```
  
3b. Play around with background colors.
  ```css
  table {
    background-color: gray;
  }
  ```

4. Add `scope` attributes to `<th>`s and then target those attributes for styling using an attribute selector.
  ```css
    th[scope="row"] {
    background-color: #0b0775;
    color: #ffffff;
  }
  ```
5. Add `<colgroup>` elements and demonstrate how that facilitates styling targeted at table _columns_.
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

6. Add an ID to a `<col>` and target it for styling that way.

7. Use the `:nth-child` **pseudo-class** to target another column.
  ```css
    col:nth-child(3) {
    background-color: #e9e9e9;
    width: 200px;
  }
  ```

8. Mark up the table with `<thead>`, `<tbody>`, `<tfoot>`. Talk over the accessibility benefits.

9. Demonstrate`colspan` attribute.
  ```html
   <tfoot>
      <tr>
        <td colspan="8">This is the footer</td>
      </tr>
   </tfoot>
  ```

10. Target the `<tfoot>` element to give the footer a common background color.
  ```css
  tfoot {
    background-color: #e9e9e9;
  }
  ```

11. Demonstrate`rowspan` attribute.
  ```html
  <th rowspan="2" scope="row">3rd Period</th>
  ```


