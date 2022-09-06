# Practice Exercises 

0. What are the five types of HTTP requests that a browser knows how to make? Why is it important to use different types of requests?

1. You've recently learned about an API for a cat sitting company. The API is fully RESTful for a resource called `cats`. You also happen to know that their database is running Postgresql on the backend. What are the five types of requests the API will respond to? List the HTTP method, url, and what SQL the request will fire, and the corresponding Sequelize method in the table below.

| http method  |  path |  sql |  Sequelize Method | description
|---|---|---|---|---|
|  |  | | | |
|  |  | | | |
|  |  | | | |
|  |  | | | |
|  |  | | | |

2. You're working on a blogging application and doing some debugging. You see in the logs that the following SQL has fired:

```
SELECT * FROM articles WHERE id = 9;
```

Given that the application is RESTful, what HTTP method and request would you expect to have been made to fire that SQL?


3. You've been hired to do some work for Discogs, an application to help users track a vinyl record collection. A `Collection` has many `Albums`, and an `Album` has many collections via a join table called `Ownership`. You've been asked to build a feature that allows to remove an album from their collection. What HTTP Method/URL/controller action would you use to implement this feature?

4. Choose your favorite web application. What's an example of a one-to-many and many-to-many relationship that might exist within the app?

5. The Marcy Lab School curriculum team needs your help to design an application to manage curriculum. Here is an overview of the organization: the team members work to produce lessons consisting of learning exercises and practice exercises. Each lesson also has essential questions and learning goals. The learning goals are tied to particular topics (such as REST/Schema Design) which fit into a broader unit (i.e. backend programming with Node)

What are some of the domain objects you would have as part of the application? What tables would exist in the database? What columns should be on those tables?

6. Build a full CRUD, RESTful API using Express for a Todo List. A TodoList should have many items and belong to a user. Each endpoint should respond with the appropriate JSON response. Our API should support:

1. An index route to see a list of todos.
2. A show route to see details about an individual todo item.
3. The ability to update a todo (i.e. mark complete)
4. delete a todo item
5. Create a Todo list item
