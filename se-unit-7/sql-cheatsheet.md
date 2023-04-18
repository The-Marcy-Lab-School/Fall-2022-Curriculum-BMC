# SQL Cheatsheet

**Table of Contents**

* 1. [Example Data](#ExampleData)
* 2. [CRUD Actions](#CRUDActions)
* 3. [WHERE](#WHERE)
	* 3.1. [AND and OR](#ANDandOR)
* 4. [JOIN and ON](#JOINandON)
* 5. [COUNT](#COUNT)
* 6. [GROUP BY](#GROUPBY)
* 7. [AS](#AS)
* 8. [ORDER BY](#ORDERBY)
* 9. [Chat GPT Help](#ChatGPTHelp)
		* 9.1. [Example:](#Example:)

##  1. <a name='ExampleData'></a>Example Data

Consider these tables:

**`people`**

| id |  first_name |  last_name |
| - | - | - | 
| 1 | 	Ann | 	Duong | 
| 2 | 	Reuben | 	Ogbonna | 
| 3 | 	Maya | 	Bhattacharjee | 


**`pets`**

| id | name | species | owner_id| 
| - | - | - | - |
| 1 |	Khalo	| dog	 | 3 |
| 2 |	Juan Pablo	| dog	 | 2 |
| 3 |	Bora	| bird	 | 1 |
| 4 |	Tora	| dog	 | 1 |
| 5 |	Carl	| cat	 | 3 |
| 6 |	Pon Juablo	| cat	 | 2 |
| 7 |	Kora	| cat	 | 1 |

##  2. <a name='CRUDActions'></a>CRUD Actions

| CRUD Action | Basic Syntax |
| - | - |
| Create | SELECT colA, colB FROM table_name; |
| Read | INSERT INTO table_name (colA, colB) VALUES (valA, valB); |
| Update | UPDATE table_name SET col = val WHERE col = val; |
| Delete | DELETE FROM table_name WHERE col = val |

```sql
INSERT INTO pets (name, species, owner_id) VALUES ('Pickles', 'cat', 3); -- Adds Pickles the cat owned by Maya to the pets table
SELECT name FROM pets; -- Selects the name column for all rows in the pets table
SELECT * FROM pets; -- Selects all columns for all rows in the pets table
UPDATE pets SET name='Wiggles' WHERE name='Pickles'; -- Changes Pickles' name to Wiggles
DELETE FROM pets WHERE name='Wiggles'; -- Deletes the pet named 'Wiggles'
```

##  3. <a name='WHERE'></a>WHERE 

Makes a `SELECT`, `UPDATE`, or `DELETE` more specific:

```sql
SELECT * FROM pets WHERE owner_id = 3; -- Selects all pets owned by owner with id=3
```
| id |  name |  species |  owner_id |
|-|-|-|-|
| 1 | 	Khalo | 	dog | 	3 |
| 5 | 	Frida | 	cat | 	3 |

###  3.1. <a name='ANDandOR'></a>AND and OR

Further specifies a `WHERE`

```sql
SELECT * FROM pets WHERE owner_id=3 AND species='cat'; -- Selects all cats owned by owner with id=3
```

| id |  name |  species |  owner_id |
|-|-|-|-|
| 5 | 	Frida | 	cat | 	3 |


```sql
SELECT * FROM pets WHERE species='bird' OR species='cat'; -- Selects all birds and cats
```

| id | name | species | owner_id| 
| - | - | - | - |
| 3 |	Bora	| bird	 | 1 |
| 5 |	Carl	| cat	 | 3 |
| 6 |	Pon Juablo	| cat	 | 2 |
| 7 |	Kora	| cat	 | 1 |

##  4. <a name='JOINandON'></a>JOIN and ON

Combines columns from multiple tables. MUST be paired with `ON` clause:

```sql
SELECT * 
FROM pets 
JOIN people 
ON people.id=pets.owner_id; 
-- returns all columns from both the pets table and the people table
```

| (pets)id | name |  species |  owner_id |  (people)id | first_name  | last_name|
|-|-|-|-|-|-|-|
| 1	| Khalo | 	dog | 	3 | 	3	| Maya	 | Bhattacharjee|
| 2	| Juan  Pablo |	dog | 	2	| 2	| Reuben	 | Ogbonna|
| 3	| Bora | 	bird | 	1 | 	1	| Ann	 | Duong|
| 4	| Tora | 	dog | 	1 | 	1	| Ann	 | Duong|
| 5	| Frida | 	cat | 	3 | 	3	| Maya	 | Bhattacharjee|
| 6	| Pon  Juablo | 	cat | 	2	| 2	| Reuben	 | Ogbonna|
| 7	| Kora | 	cat | 	1 | 	1	| Ann	 | Duong|

##  5. <a name='COUNT'></a>COUNT

Used with a `SELECT` statement, `COUNT` creates a new column called `count`.

```sql
SELECT COUNT(*) FROM pets; -- returns how many pets are in the pets table
```

|count|
|-|
| 7 |

##  6. <a name='GROUPBY'></a>GROUP BY

We can choose which column to count from by adding a second column to `SELECT` and adding a `GROUP BY` clause with the same column.

```sql
SELECT COUNT(*), owner_id  FROM pets GROUP BY owner_id; -- shows how many pets each owner owns
```

| count |  owner_id |
|-|-|
| 2 | 3 |
| 2 |	2 |
| 3 |	1 |

##  7. <a name='AS'></a>AS

Renames a selected column. Often it is used to rename the COUNT column. You MUST use double quotes (`""`) to rename the column.

```sql
SELECT COUNT(*) AS "number of pets" FROM pets; -- returns how many pets are in the pets table
```

|number of pets|
|-|
| 7 |

##  8. <a name='ORDERBY'></a>ORDER BY

Orders a selection by a particular column and can be specified with `ASC` (ascending) or `DESC` (descending)

```sql
SELECT COUNT(*) AS "number of pets", owner_id  
FROM pets 
GROUP BY owner_id
ORDER BY "number of pets" DESC;
```

| number of pets | owner_id |
|-|-|
| 3 |	1 |
| 2 |	3 |
| 2 |	2 |

##  9. <a name='ChatGPTHelp'></a>Chat GPT Help

When in doubt, a carefully constructed ChatGPT prompt can work wonders! 

Here is ChatGPT's own advice for using it to generate SQL queries!

> As an AI language model, I can't directly interact with databases or ingest data from them. However, I can help you with SQL queries or understanding database concepts if you provide me with the necessary information.
> 
> If you want to query a specific database, you can:
> 
> - Tell me about the tables and their structures (including column names and data types).
> - Describe the data you're interested in or the questions you want to answer.
> - Based on the provided information, I can help you construct SQL queries or provide insights about the data.
> 
> Remember that I won't be able to execute the queries or access the data directly, but I can help you with the SQL code and understanding how to work with the data.

####  9.1. <a name='Example:'></a>Example:

Prompt:

> Can you help me generate a SQL query to retrieve the total sales amount for each product category in my sales database? 
> 
> The sales database has two tables, 'products' and 'orders'. 
> 
> The 'products' table has the following columns: 'product_id', 'product_name', and 'product_category'. 
> 
> The 'orders' table has the following columns: 'order_id', 'order_date', 'product_id', 'quantity', and 'price'.

And ChatGPT responds with:

> Sure! Here's a SQL query to retrieve the total sales amount for each product category in your sales database:
> 
> ```sql
> SELECT p.product_category, SUM(o.quantity * o.price) as total_sales
> FROM products p
> JOIN orders o
> ON p.product_id = o.product_id
> GROUP BY p.product_category;
> ```
> 
> This query joins the 'products' and 'orders' tables on the 'product_id' column and groups the results by the 'product_category' column. It then calculates the total sales for each category by multiplying the 'quantity' and 'price' columns and summing the results.