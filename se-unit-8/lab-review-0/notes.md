# Creating a Vite Project

Key Concepts

- ESModule `import`/`export` syntax
  - `import ReactDOM from 'react-dom/client'`
  - `export default App`
- Top-level `App` component
-

## Setup

https://vitejs.dev/guide/

```sh
# Check your npm version
npm -v

# npm 6.x
npm create vite@latest my-react-app --template react

# npm 7+, extra double-dash is needed:
npm create vite@latest my-react-app -- --template react

cd my-react-app
npm i
npm run dev
```

## File Structure

**New File Extensions!**

- `.jsx` files let us use JSX without importing React
- **Node Files** - `.cjs` files are "CommonJS" files. These are files that are meant to be run in the Node environment and use the CommonJS `require()`/`module.exports` syntax.
- **Browser Files** - All `.js`/`.jsx` files are counted as "modules" that are meant to be run in the browser, meaning we can use ESModules `import`/`export` syntax.

**Key Folders / Files**

- `package.json` - See scripts, dependencies, and "type"
- `.eslintrc.cjs` file provides linting rules
- `public/` folder - Contains static assets (pictures, text files, etc...). See the [docs](https://vitejs.dev/guide/assets.html#the-public-directory)
- `index.html` serves as the entry point. Loads `src/main.js`
- `src/` folder
  - `main.jsx` renders the top-level `App` component. We can remove `StrictMode`
  - `App.jsx` the top-level component

## NPM Commands for Vite

See the `"scripts"` section of the `package.json` file.

```
npm run dev
npm run build
npm run preview
```

## Further Organization

We can further organize this code. I like to create the following structure:

```
vite-project/
└── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── OtherComponent1.js
│   │   └── OtherComponent2.js
│   ├── contexts/
│   │   ├── MyContext.js
│   │   └── MyContextProvider.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── OtherComponent1.css
│   │   └── OtherComponent2.css
└── index.html
```
