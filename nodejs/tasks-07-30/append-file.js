const fs = require("fs");

console.log(fs.readFileSync("appendOutput.txt", "utf8"));
// If we have to use readFile which is (asychronous), we need to provide callback function.

data = " This is the after append content.";
fs.appendFile("appendOutput.txt", data, "utf8", (err) => {
  if (err) {
    console.log("Error in append: ", err);
  }
  console.log(fs.readFileSync("appendOutput.txt", "utf8"));
});
