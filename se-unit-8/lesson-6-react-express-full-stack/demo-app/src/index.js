const app = require('./server');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, () => {
  console.log(`listening at http://${HOST}:${PORT}`);
})