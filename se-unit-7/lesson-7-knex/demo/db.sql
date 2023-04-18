--SQL to create our database and data--

DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS author_book;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE people (id SERIAL PRIMARY KEY, first_name TEXT, last_name TEXT);
INSERT INTO people (first_name, last_name) VALUES ('Ann', 'Duong');
INSERT INTO people (first_name, last_name) VALUES ('Reuben', 'Ogbonna');
INSERT INTO people (first_name, last_name) VALUES ('Maya', 'Bhattacharjee');

CREATE TABLE pets (id SERIAL PRIMARY KEY, name TEXT, species TEXT, owner_id INTEGER);
INSERT INTO pets (name, species, owner_id) VALUES ('Khalo', 'dog', 3);
INSERT INTO pets (name, species, owner_id) VALUES ('Juan Pablo', 'dog', 2);
INSERT INTO pets (name, species, owner_id) VALUES ('Bora', 'bird', 1);
INSERT INTO pets (name, species, owner_id) VALUES ('Tora', 'dog', 1);
INSERT INTO pets (name, species, owner_id) VALUES ('Frida', 'cat', 3);
INSERT INTO pets (name, species, owner_id) VALUES ('Pon Juablo', 'cat', 2);
INSERT INTO pets (name, species, owner_id) VALUES ('Kora', 'cat', 1);

CREATE TABLE customers (
id SERIAL PRIMARY KEY,
name TEXT,
email TEXT
);
CREATE TABLE products (
id SERIAL PRIMARY KEY,
name TEXT,
price NUMERIC
);
CREATE TABLE orders (
id SERIAL PRIMARY KEY,
customer_id INTEGER,
product_id INTEGER,
purchase_date DATE
);

INSERT INTO customers (name, email) VALUES ('Ann', 'ann@marcylabschool.org');
INSERT INTO customers (name, email) VALUES ('Reuben', 'ann@marcylabschool.org');
INSERT INTO customers (name, email) VALUES ('Maya', 'ann@marcylabschool.org');

INSERT INTO products (name, price) VALUES ('Chair', 15.99);
INSERT INTO products (name, price) VALUES ('Table', 28.75);
INSERT INTO products (name, price) VALUES ('Book', 3.88);
INSERT INTO products (name, price) VALUES ('Pencil', 0.21);

INSERT INTO orders (customer_id, product_id, purchase_date) VALUES (2, 4, '03-01-2000');
INSERT INTO orders (customer_id, product_id, purchase_date) VALUES (3, 2, '04-15-2005');
INSERT INTO orders (customer_id, product_id, purchase_date) VALUES (3, 1, '06-25-2006');
INSERT INTO orders (customer_id, product_id, purchase_date) VALUES (2, 2, '08-23-2008');
INSERT INTO orders (customer_id, product_id, purchase_date) VALUES (1, 1, '01-13-2010');
INSERT INTO orders (customer_id, product_id, purchase_date) VALUES (2, 3, '05-19-2011');
INSERT INTO orders (customer_id, product_id, purchase_date) VALUES (1, 2, '09-05-2015');

CREATE TABLE authors(
id SERIAL PRIMARY KEY,
first_name TEXT NOT NULL,
last_name TEXT NOT NULL
);

CREATE TABLE books(
id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
published_year INT NOT NULL
);

CREATE TABLE author_book(
id SERIAL PRIMARY KEY,
author_id INT REFERENCES authors(id),
book_id INT REFERENCES books(id)
);

INSERT INTO authors(first_name, last_name) VALUES('James', 'Baldwin');
INSERT INTO authors(first_name, last_name) VALUES('Langston', 'Hughes');
INSERT INTO authors(first_name, last_name) VALUES('Maya', 'Angelou');
INSERT INTO books(title, published_year) VALUES('Learn to Git With It', 2015);
INSERT INTO books(title, published_year) VALUES('HTML for Dummies', 2018);
INSERT INTO books(title, published_year) VALUES('Advanced JavaScript', 2009);
INSERT INTO books(title, published_year) VALUES('Starting Express', 2010);
INSERT INTO books(title, published_year) VALUES('Node for Newbies', 2020);
INSERT INTO author_book(author_id, book_id) VALUES(1, 3);
INSERT INTO author_book(author_id, book_id) VALUES(2, 1);
INSERT INTO author_book(author_id, book_id) VALUES(3, 2);
INSERT INTO author_book(author_id, book_id) VALUES(1, 5);
INSERT INTO author_book(author_id, book_id) VALUES(3, 4);
INSERT INTO author_book(author_id, book_id) VALUES(2, 5);
INSERT INTO author_book(author_id, book_id) VALUES(3, 3);							
										
										
										
										
										
										
										
										
										