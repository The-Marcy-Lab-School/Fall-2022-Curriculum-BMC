# Organizing a Project with MVC

**MVC (Model-View-Controller)** is a software architecture pattern that divides program logic into three responsibilites:
* **Model**: The application's dynamic data structure, independent of the user interface. Provides an interface for CRUD actions.
* **View**: How the application's model is presented visually to the user. Provides UI components for interacting with the controllers.
* **Controller**: Accepts inputs from the view and uses the model's interface to make changes. Sends back updated model state to update the view.

![](img/mvc.png)

### MVC with Express

**View**
In an express application, the static assets (HTML, CSS, JS) that are served to the user at the home route `/` provides the view. The view will interact with the controller via `fetch` calls to the specified URL endpoints.

![](img/view.svg)

**Controller**
In an Express app, the controllers are the individual route-handlers for each HTTP verb. 

They use the path, dynamic route parameters, query parameters, and data in the request body as inputs to the model's interface. 

They also will create responses to send back to the view.


```js
const getTodosController = (req, res) => {
  const { ToDo } = req;
  const items = ToDo.list();
  res.send(items);
};

module.exports = getTodosController;
```

These will be imported by the server and assigned as request handlers.

**Model**

CRUD (create, read, update, delete) actions lie at the core of any model. Typically, the model is represented with a database. In our applications so far, it has been a `class`. 

In both cases, the model will have a dedicated file with functions for managing the underlying data.

Only the controllers will have access to the model's interface.

### File Structure for ToDo Application



- **[View]** `public/`
    - `index.html`, `index.css`, `index.js`
- `src/`
    - **[Controller]** `controllers/`
        - `index.js` (imports all of the files below) - “barrel file”
        - `create.js`, `list.js`, `update.js`, `delete.js`, `delete-all.js` (bonus `find.js`)
    - `middleware/`
        - `add-todos.js`, `log-routes.js`
    - **[Model]** `models/`
        - `todo.js` - defines the `ToDo` model (in-memory array + CRUD actions)
        - `console.js` - this is just for testing
    - `index.js` - entry point, imports the `server`, starts the `server`
    - `server.js` - imports `router`, sets up middleware
    - `routes.js` - imports controllers and defines routes, sets up ToDo middleware
    - `utils.js` - exports id generator function