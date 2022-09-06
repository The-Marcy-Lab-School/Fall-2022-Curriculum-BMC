const http = require('http');
const url = require('url');

const requestListener = function (req, res) {
  const renderResponse = function(text, statusCode = 200){
    res.writeHead(statusCode);
    res.end(text);
  }

  const pathName = url.parse(req.url).pathname
  const queryObject = url.parse(req.url, true).query;
  console.log(pathName)
  console.log(queryObject)

  if(pathName === "/"){
    if(queryObject.name){
      renderResponse(`Hello, ${queryObject.name}!`);
    } else {
      renderResponse('Hello, World!');
    }
  }else if(pathName === "/dogs"){
    renderResponse('Hello, Dogs!');
  }else{
    renderResponse("Sorry, that route does not exist.", 404);
  }
}

const port = 8080

const server = http.createServer(requestListener);
server.listen(port);
console.log(`Server is listening on port ${port}`)
