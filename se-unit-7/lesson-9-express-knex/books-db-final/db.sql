DROP TABLE IF EXISTS books;

CREATE TABLE books(
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	published_year INT NOT NULL
);

INSERT INTO books(title, published_year) VALUES('Learn to Git With It', 2015);
INSERT INTO books(title, published_year) VALUES('HTML for Dummies', 2018);
INSERT INTO books(title, published_year) VALUES('Advanced JavaScript', 2009);
INSERT INTO books(title, published_year) VALUES('Starting Express', 2010);
INSERT INTO books(title, published_year) VALUES('Node for Newbies', 2020);					
										