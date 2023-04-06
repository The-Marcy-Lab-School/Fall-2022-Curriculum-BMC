const http = require('http');
const url = require('url');
const host = process.env.host || '127.0.0.1'; // Use a host env variable if it is available, otherwise use 127.0.0.1
const port = process.env.port || 8000; // Use a port env variable if it is available, otherwise use 8000

const homeHandler = (req, res) => {
    res.writeHead(200); // Sets the status code of the response
    res.write("<h1>Welcome to the home page</h1>"); // Sets the body of the response
    res.end(); // Ends the response and sends it off to the client
}

const aboutHandler = (req, res) => {
    console.log('going to about')

    const baseUrl = url.parse(req.url, true); // Parses the request url AND breaks down the query params into an object
    const { query } = baseUrl; // Extracts the query object from the baseUrl
    console.log('query:', query);
    
    const name = query.name || 'no one'; // Extract the name query parameter if it exists.
    res.writeHead(200);
    res.write(`<h1>Welcome to the about page for ${name}.</h1>`);
    res.end();
}

const errorHandler = (req, res) => {
    console.log("no page found here");
    res.writeHead(404);
    res.write("<h1>No page found </h1>");
    res.end();
}

// This function will handle all incoming requests and generate responses
const requestListener = (req, res) => { 
    console.log(`incoming request at ${req.url}`);
    
    const baseUrl = url.parse(req.url);
    console.log('baseUrl:', baseUrl);

    // const pathname = baseUrl.pathname;
    const { pathname } = baseUrl;

    switch(pathname) {
        case '/':
            return homeHandler(req, res)
        case '/about':
            return aboutHandler(req, res)
        case '/favicon.ico':
            console.log("I hate favicon");
            break;
        default:
            errorHandler(req, res);
    }
}

// Create a server object with the provided handler
const server = http.createServer(requestListener);

// Start listening at the provided host:port
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});