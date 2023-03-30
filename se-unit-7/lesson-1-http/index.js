const http = require('http');
const url = require('url');
const host = '127.0.0.1';
const port = 8000;

// This function will handle all incoming requests and generate responses
const requestListener = (req, res) => { 
    console.log(`incoming request at ${req.url}`);
    
    // Parse the request url and parse the query params into an object
    const parseQueryParams = true;
    const baseUrl = url.parse(req.url, parseQueryParams);
    console.log('baseUrl:', baseUrl);
    
    // We want the pathname and the query object
    const { pathname, query } = baseUrl;
    console.log('pathname:', pathname);
    console.log('query:', query);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Welcome to the home page</h1>");
    res.end();
}

// Create a server object with the provided handler
const server = http.createServer(requestListener);

// Start listening at the provided host:port
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});