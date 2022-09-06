1. Run the following commands to organize your practice -set:

- `cd to practice/1.practice-set`
- `mkdir sequelize-practice`
- `cd sequelize-practice`
- `git init`

2.  Build out a simple express application:
    a. `npm init`
    b. `index.js` has been created for you. It sets up and express app with some middleware.

3.  Install nodemon
    a. run the command `npm install nodemon --save-dev`
    b. open the `package.json` and this key/value pair to the `scripts{}` object:
    "start": "nodemon [input the path to your index.js]"

    Now once you npm start your project, new file changes will auto-restart your project, instead of you having to do it manually.

4.  Check that your server is running
    a. run `npm start`
    b. go to localhost:3000 in your browser
    c. you should see a blank screen with **Cannot GET/**

    **This would be a great time to make a git commit!**

5.  Install Sequelize and the Command Line Interface
    a. run the command `npm install sequelize pg pg-hstore`
    b. run the command `npm install --save-dev sequelize-cli`
    c. open the `package.json` and this key/value pair to the `scripts{}` object:
    "seed": "node scripts/seed.js".

    This will be used later to seed the database with mock data.

    This will install Sequelize and save it in our package.json file. Installing pg-hstore Sequelize Postgres-specific hstore within Sequelize.

6.  Create Database
    a. `createdb sequelize-practice`

7.  Set Up a Models
    a. `mkdir models`
    b. `cd models`
    c. `touch index.js`
    d. Within index.js, require in Sequelize and pass in a connection URI. See the [Sequelize docs](https://sequelize.org/master/manual/getting-started.html) for more details.

    ```js
    const Sequelize = require('sequelize');

    const db = new Sequelize('postgres://localhost:5432/sequelize-practice');

    module.exports = {
    	db
    };
    ```

    e. Within your main `index.js` located at `practice/1.practice-set/index.js`, require in your models with:

    ```js
    const { db } = require('./models');
    ```

    f. Check out the docs for in order to [Test your database connection](https://sequelize.org/master/manual/getting-started.html#testing-the-connection).

    Code out a `connect()` function, like the one below, and place it at the bottom of your projects root `index.js` file located at `practice/1.practice-set/index.js`

    ```js
    const connect = async () => {
    	try {
    		await db.authenticate();
    		console.log('Connection has been established successfully.');
    	} catch (error) {
    		console.error('Unable to connect to the database:', error);
    	}
    };

    connect();
    ```

    **This would be a great time to make a git commit!**

8.  Plan your Schema's.
    Your models must follow the below requirements. Read the requirements below. Jot down notes here in the README, in a notebook, or in another place of your choosing:

    a. Customer:

    - name
    - phone number
    - email

    b. Address (of Customer)

    - street
    - city
    - state
    - zip code

    b. Food:

    - title
    - price
    - description

    c. Reviews

    - titles
    - text
    - stars (0-5)

9.  Create your models.

    Using your schema, create your models withing the `/models/index.js` file. Sequelize guides can be particularly helpful for [model definition](https://sequelize-guides.netlify.com/model-definition/), [column types](https://sequelize-guides.netlify.com/column-types/), and [validations](https://sequelize.org/master/manual/models-definition.html#validations)

    Make sure to add each model to the `module.exports {}`

    Under the models and above the module.exports, make associations between tables. Use documenation about [Sequelize Associations](https://sequelize.org/master/manual/assocs.html) to guide you.

    **This would be a great time to make a git commit!**

10. Sync your models to your database.

    Read the docs on [model synchronization](https://sequelize.org/master/manual/model-basics.html#model-synchronization).

    Within the root `index.js`:
    a. import each of your models.
    b. Create a `modelSync()` function. Within it, sync your `Customer` model to your database using the `model.sync()`, which is explained in the Sequelize docs.

    c. Once you save and `nodemon` regenerates automatically, you will now notice SQL statements being output to your terminal.

    d. OPTIONAL: If you prefer not to see this terminal output, then look at the [Sequelize Logging docs](https://sequelize.org/master/manual/getting-started.html#logging).
    a. Return to `/models/index.js`.
    b. include { logging: false } on the line when where you define your `db`.

    e. Sync the remainder of your models to your database. Back in your root `index.js` file.

    **This would be a great time to make a git commit!**

11. Congratulations!!!

    Pause here. Review what you have done so far! This would be a great time to:

    - refactor any of your code within your root directory's `index.js`
    - add new columns to any of your models
    - dive deeper into reading the Sequelize documenation

12. Set up Routes

        - Return back to the root level of this project using `cd../` to return to your `sequelize-practice` directory.

        - Create a directory for your routes with `mkdir routes`.

        - `cd routes`

        - Make files for routes that will be associated with each of your models. When you are finished, you should have a `customer.js, address.js, food.js, and reviews.js` file.

        - At the root level `index.js`, require in eahc of your routes using something like:

        ```js
        const customerRouter = require('./routes/customer');
        ```

        - Under your app variable, wire up your routes so that they can be used by your app. For each route, create a middleware function such as:

        ```js
        app.use('/customer', customerRouter);
        ```

    **NOTE, routes will not work yet yet.**

    - Within `customer.js`, set up a test message to make sure that your routes are connected to your application correctly:

    a. Add the following starter code to `customer.js`

    ```js
    const router = require('express').Router();

    const { Customer } = require('../models');
    module.exports = router;

    router.get('/', async (req, res, next) => {
    	res.send('landed on the GET /customer/ route');
    });
    ```

    b. In your browser, navigate to `localhost:3000/customer`. If you can see your res.send message, then you have set up your customer route correctly!

    **This would be a great time to make a git commit!**

    c. Using similar starter code, ensure that your other routes are set up correctly for Address, Food, and Reviews.

    d. Test out each of your routes in `localhost:3000`. Once you have verified that they are set up, **this would be a great time to make a git commit!**

13. Seed the database with mock data:

    At this time, take a look at the pre-made `seed.js` file in the `practice/1.practice-set/scripts` directory. This seed file aligns with the solution code for this practice. However, if you have different columns for your models, then ensure you update this `seed.js` file accordingly.

    Your terminal output will read:
    'seeding...
    closing db connection
    db connection closed'.

    This is an indicator that your database has been seeded.
    If you are using a database GUI, take a look at your tables now.
    If you are using the command line, then open a new terminal. Then, run these commands to see your customer table:

    - `psql`
    - `\c sequelize-practice`
    - `SELECT * FROM Customers;`

    Use similar SQL queries to view the data within your other tables.

    After you have checked over your tables, **this would be a great time to make a git commit!**

14. Create A Route To View All Customers

    Open your `customer.js` file.

    Remove your `router.get()` method that was used for testing in step 13.

    - Create a route that:
      a. gets all users
      b. sends a response object of all customers
      c. Use [Sequelize Simple Select Queries](https://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries) of [Sequelize Guides](https://sequelize-guides.netlify.com/querying/#querying-using-models) to support you.
      d. **NOTE This is equivalent to running:**
      - `psql`
      - `\c sequelize-practice`
      - `SELECT * FROM Customers;`

    Go to your browser and navigate to `http://localhost:3000/customer`. Your Route is set up correctly if it looks something like this:
    [{"id":1,"name":"User 1","phoneNumber":"(555)555-5555","email":"user1@email.com","createdAt":"2020-03-20T05:15:07.152Z","updatedAt":"2020-03-20T05:15:07.152Z"},{"id":2,"name":"User 2","phoneNumber":"(555)555-5555","email":"user2@email.com","createdAt":"2020-03-20T05:15:07.152Z","updatedAt":"2020-03-20T05:15:07.152Z"},{"id":3,"name":"User 3","phoneNumber":"(555)555-5555","email":"user3@email.com","createdAt":"2020-03-20T05:15:07.152Z","updatedAt":"2020-03-20T05:15:07.152Z"}]

15. Create Routes to View All Addresses, Foods, and Reviews

    - Create a route that:
      a. gets all addresses
      b. sends a response object of all addresses
      c. **NOTE This is equivalent to running:**

      - `psql`
      - `\c sequelize-practice`
      - `SELECT * FROM Address;`

    - Create a route that:
      a. gets all food
      b. sends a response object of all food
      c. **NOTE This is equivalent to running:**
    - `psql`
    - `\c sequelize-practice`
    - `SELECT * FROM Food;`

    - Create a route that:
      a. gets all reviews
      b. sends a response object of all reviews
      c. **NOTE This is equivalent to running:**
    - `psql`
    - `\c sequelize-practice`
    - `SELECT * FROM Reviews;`

16. Create a Route to View A Single Customer

    - Open your `customer.js` file.

    - Create a route that shows the json data for an indivudal customer based on the customer id.

    - Go to the browser and navigate to `http://localhost:3000/customer/1`. You have set up your route correctly when your json output is similar to:

    {"id":1,"name":"User 1","phoneNumber":"(555)555-5555","email":"user1@email.com","createdAt":"2020-03-20T05:25:35.208Z","updatedAt":"2020-03-20T05:25:35.208Z"}

    **This would be a great time to make a git commit!**

17. Create a Route to View A Single Address, Food, and Review

    Check each route in your browser.

    Once you have verified that your routes are working, then **this would be a great time to make a git commit!**

18. Congratulations! You have set up a basic API using Postgres, Sequelize, and Express! There is, of course, much more you could add and other ways to test your API.
