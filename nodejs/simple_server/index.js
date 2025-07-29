const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  let parseUrl = url.parse(req.url, true);
  console.log(parseUrl);
  res.end("Hello Everyone");
});

server.listen(3000, () => {
  console.log("server is running on port: 3000");
});
