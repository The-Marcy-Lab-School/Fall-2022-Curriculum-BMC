# Database Schema Design

**Database schema design**, in simplest terms, is the process of **organizing** and **structuring** the way data is stored in a database so it can be efficiently stored, retrieved, and updated. 

A well-designed database schema ensures **data consistency, minimizes redundancy, and improves performance**.

## Steps For Designing A Database

When designing a database schema, you'll typically follow these steps:

1. Identify entities: Determine the main objects or concepts in your system that you need to store information about. 

> For example, if you're designing a school database, tables might be students, teachers, and classes.

2. Define attributes: List the characteristics or properties of each entity. 

> For example, for the student entity, attributes might include first name, last name, and date of birth.

3. Determine relationships: Identify how the entities are related to each other. 

> For example, students might be enrolled in classes, and classes might be taught by teachers.

4. **Normalize data**: Organize the data in a way that eliminates redundancy and ensures data consistency. This involves creating _tables_ and defining _primary keys_, _foreign keys_, and _relationships_ between tables.

> For example: (* = primary key, **=foreign key)
> - `students (id*, first_name, last_name, dob, course_id**)`
> - `teachers (id*, first_name, last_name, course_id**)`
> - `courses (id*, title)`

## Practice

In groups, design a database schema for an application. Here are a few ideas that you can start with (or come up with a new one!):
* An online store that sells laptops.
* A photo-sharing application with commenting features (Instagram).
* An online library catalog.
* A restaurant reservation system.
* An concert management system.
* A hotel booking system.

<details><summary>Examples</summary>

**Online Store**
* `products (id*, product_name)`
* `customers (id*, email)`
* `orders (id*, product_id**, quantity)`
* `customer_orders (id*, customer_id**, order_id**)`

**Instagram**
* `users (id*, username)`
* `posts (id*, photo_url, caption, post_date, user_id**)`
* `comments (id*, comment_text, comment_date, post_id**, user_id**)`

**Restaurant Reservations**
* `Customers (customer_id*, first_name, last_name, phone, email)`
* `Tables (table_id*, capacity, location)`
* `Reservations (reservation_id*, customer_id**, table_id**, date_time, party_size, special_requests)`
* `MenuItems (menu_item_id*, name, description, price, category)`
* `Orders (order_id*, reservation_id**, menu_item_id**, quantity)`
* `OrderHistory (order_history_id*, customer_id**, menu_item_id**, date_time, quantity)`

</details>

## Normalizing Tables

Database normalization is the process of organizing data in a database to **minimize redundancy** and improve **data integrity**.

* Normalization involves **decomposing tables** into smaller, more manageable pieces while maintaining relationships between them. 
* **Normal forms** are a series of guidelines to help achieve a well-structured and efficient database schema.

### First Normal Form (1NF)

A table is in 1NF if it satisfies the following conditions:
* All columns contain atomic values (i.e., each value is indivisible).
* Each column has a unique name.
* The order in which data is stored does not matter.

1NF helps eliminate duplicate data by ensuring that each attribute has a single, indivisible value.

For example, this table is NOT in 1NF because the `products` column contains multiple values:

| order_id | customer_name | products |
| - | -| - |
| 1 | Avery | Laptop, Mouse, Keyboard |
| 2 | Blake | Laptop, Monitor |
| 3 | Charles | Monitor, Trackpad |

This leads to several problems:

* **Data Redundancy:** The same product is repeated multiple times across different rows, leading to unnecessary duplication of data.
* **Data Inconsistency:** If a product name needs to be updated, it must be done in multiple places, which can lead to inconsistencies if not done correctly.
* **Querying and Updating Challenges:** Performing queries or updates on this data structure can be difficult and inefficient. For example, it is cumbersome to find all customers who ordered a specific product or to add or remove a product for a customer.

To fix it, we can make

| order_id | customer_name | product |
| - | -| - |
| 1 | Avery | Laptop |
| 1 | Avery | Mouse|
| 1 | Avery | Keyboard |
| 2 | Blake | Laptop |
| 2 | Blake | Monitor |
| 3 | Charles | Monitor |
| 3 | Charles | Trackpad |

**Q: How do you know that the table below is NOT in the first normal form? How would you fix it?**

| student_id | 	student_name | 	courses |
| - | -| - |
| 1 | 	Alice | 	Math, Science, History |
| 2 | 	Bob | 	Science, English, Mathematics |
| 3 | 	Carol | 	History, Math, English |

<details><summary>Solution</summary>

> The `courses` column contains multiple values for each student, violating the 1NF rule of having atomic values in each column. 
>
> **Solution:** Create a new table with a separate row for each enrollment. Notice how we needed a new piece of data to uniquely identify each row: `enrollment_id` 
>
> | enrollment_id | student_id |	student_name |	course |
> | - | - | - | - |
> | 1 | 1 |	Alice |	Math |
> | 2 | 1 |	Alice |	Science |
> | 3 | 1 |	Alice |	History |
> | 4 | 2 |	Bob |	Science |
> | 5 | 2 |	Bob |	English |
> | 6 | 2 |	Bob |	Mathematics |
> | 7 | 3 |	Carol |	History |
> | 8 | 3 |	Carol |	Math |
> | 9 | 3 |	Carol |	English |

</details>

### Second Normal Form (2NF)

A table is in 2NF if it meets the following criteria:
* It is already in 1NF.
* All non-key columns are fully dependent on the primary key (i.e., there are no partial dependencies).

2NF helps remove redundancy by ensuring that each non-key attribute is fully dependent on the primary key. This prevents attributes from being repeated across multiple rows.

Take a look at this table `order_details` which is NOT in the second normal form:

| order_id |	product_id | 	product_name |	customer_id |	customer_name |
| - | -   | -        |  - | -     | - | - |
| 1 |	101 | 	Laptop |	1 |	Avery |
| 1 |	102 | 	Monitor |	1 |	Avery |
| 2 |	101 | 	Laptop |	2 |	Blake |
| 3 |	103 | 	Trackpad |	3 |	Charles |

In the `order_details` table, `product_name` depends on `product_id`, and `customer_name` depends on `customer_id`. To reach 2NF, we must eliminate partial dependencies. 

We can create separate tables to remove these partial dependencies:

* `products` (product_id*, product_name)
* `customers` (customer_id*, customer_name)
* `orders` (order_id*, customer_id**)
* `order_items` (order_id*, product_id**)

<details><summary>See the tables</summary>

The `products` table tracks the name associated with a particular `product_id`

| product_id* | product_name |
| - | - |
| 101 | Laptop |
| 102 | Monitor |
| 103 | Trackpad |

The `customer` table tracks the name associated with a particular `customer_id`:

| customer_id* | customer_name |
| - | - |
| 1 | Avery |
| 2 | Blake |
| 3 | Charles |

The `orders` table tracks who is associated with an order:
| order_id* | customer_id** |
| - | - |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |

The `order_items` table tracks the products associated with an order:

| order_id* | product_id** |
| - | - |
| 1 | 101 |
| 1 | 102 |
| 2 | 101 |
| 3 | 103 |

</details>

**Q: How do you know that the table below is NOT in 2NF? How would you fix it?** 

| enrollment_id | student_id |	student_name |	course |
| - | - | - | - |
| 1 | 1 |	Alice |	Math |
| 2 | 1 |	Alice |	Science |
| 3 | 1 |	Alice |	History |
| 4 | 2 |	Bob |	Science |
| 5 | 2 |	Bob |	English |
| 6 | 2 |	Bob |	Mathematics |
| 7 | 3 |	Carol |	History |
| 8 | 3 |	Carol |	Math |
| 9 | 3 |	Carol |	English |

<details><summary>Solution</summary>

> The table is NOT in 2NF because the `student_name` column is dependent on the `student_id` column, which is not the primary key.
> 
> To remove this partial dependency, we can make separate tables:
> 
> * `students` (student_id*, student_name)
> * `enrollments` (enrollment_id*, student_id**, course)
> 
> The `students` table:
> 
> | student_id* |	student_name |
> | - | - |
> | 1 |	Alice |
> | 2 |	Bob |
> | 3 |	Carol |
> 
> The `enrollments` table:
> | enrollment_id* | student_id**  |	course |
> | - | -  | - |
> | 1 | 1  |	Math |
> | 2 | 1  |	Science |
> | 3 | 1  |	History |
> | 4 | 2  |	Science |
> | 5 | 2  |	English |
> | 6 | 2  |	Mathematics |
> | 7 | 3  |	History |
> | 8 | 3  |	Math |
> | 9 | 3  |	English |

</details>

### Third Normal Form (3NF)

A table is in 3NF if it satisfies these conditions:
- It is already in 2NF.
- There are no transitive dependencies (i.e., non-key columns are not dependent on other non-key columns).

3NF helps further reduce redundancy by ensuring that all non-key attributes are only dependent on the primary key, not on other non-key attributes.

Consider this table which is NOT in 3NF:

| album_id |	album_title |	artist_id	|artist_name |	genre |
| - | - | - | - | - |
| 1 |	The Wall | 1 |	Pink Floyd	| Rock  |
| 2 |	Dark Side of the Moon | 1 |	Pink Floyd	 | Rock |
| 3 |	Thriller | 2 |	Michael Jackson	| Pop  |

This table is not in 3NF because there is a transitive dependency: `genre` depends on `artist_id`, which is a non-key attribute. To convert this schema to 3NF, we need to remove the transitive dependency by creating separate tables:

* `albums` (album_id, album_title, artist_id)
* `artists` (artist_id, artist_name, genre)
The updated schema and data:

| album_id |	album_title	| artist_id | 
| -|-|-|
| 1 |	The Wall	| 1 | 
| 2 |	Dark Side of the Moon	| 1 | 
| 3 |	Thriller	| 2 | 

| artist_id |	artist_name	| genre |
| - | - | - |
| 1 |	Pink Floyd	| Rock |
| 2 |	Michael Jackson	| Pop |

By creating separate tables for Albums and Artists, we've removed the transitive dependency and achieved 3NF. This new schema reduces redundancy, improves data integrity, and better represents the relationships between albums and artists.