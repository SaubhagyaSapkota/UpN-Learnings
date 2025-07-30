const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // a. Parse request path
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  // b. Parse headers
  const headers = req.headers;

  // c. Parse payload
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    console.log("Path:", path);
    console.log("Query:", query);
    console.log("Headers:", headers); 
    console.log("Payload:", body); 

    res.end("Request parsed");
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
