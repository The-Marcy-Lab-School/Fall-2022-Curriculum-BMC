# Introduction to Databases & SQL

### Solutions

**Exercise 0:**
There are two main types of databases, relational and non-relational. The major difference between them is how they handle data. **Relational databases are structured. You have tables and these tables may have dependencies on each other, or relationships**. For example, a database for a store will have a table for customers and one for orders. These two tables are related, because an order is made by a customer. **Non-relational databases are document-oriented. This so called document type storage allows multiple 'categories' of data to be stored in one construct or Document**. So using the previous example, a Customer document, would have the customer's information, a sub-category for all their orders, etc.

**Exercise 2:**
The command `l` (from the `psql` command line) outputs a list view of databases. **NOTE** The only user of your database is current you. But if you were working at a company with multiple staff members, then it would be common to see several database owners.

**Exercise 3:**
The projects table will have an id row, name row, and password row. There are also some contraints that require the primary key to be a number (that's what SERIAL stands for) and requires the name and partners to text that is not null.

**Exercise 6:**
_Reflections may vary_
Writing commands using SQL is pretty clear. However, writing indivudal commands for inputting individual pieces of data can be tedious.
