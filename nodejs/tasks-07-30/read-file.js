const fs = require("fs");

fs.readFile("readOutput.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});

// this is executed before as the file is being read asychronously
// the code does not get blocked. 
console.log("this is Asynchronous file read.")
