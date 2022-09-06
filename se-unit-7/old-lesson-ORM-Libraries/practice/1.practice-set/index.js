const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Static directory
app.use(express.static('app/public'));

app.listen(PORT, () => {
	console.log(`It works! Listening on PORT ${PORT}`);
});
