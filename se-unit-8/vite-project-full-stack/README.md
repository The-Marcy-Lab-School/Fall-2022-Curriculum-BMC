# React + Vite + Express

https://github.com/NathanKr/react-vite-express-setup

Folder Structure
```
root/
├── client/          - (contains all Vite code)
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/         - (contains React code)
├── server/          - (contains Express code)
│   ├── package.json
│   ├── index.js
│   ├── server.js
│   ├── routes.js
│   └── src/        - (contains middleware, db, controllers)
└── package.json
```

The root directory, the `client/` directory, and the `server/` directory will all have their own `package.json` and their own `node_modules/` (make sure to `npm i` in all directories!).

## Setting up the proxy

![](./react-vite-express-schema.png)

The `client/vite.config.js` file should look like this:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [react()],
})
```

The `server.proxy` configuration sets up a middle-man proxy server that will redirect all requests made on the front end to our Express backend.

Now, requests made to `/api/*` will be redirected to our Express backend.