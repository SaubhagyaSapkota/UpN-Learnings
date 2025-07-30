const { error } = require("console");
const fs = require("fs");

// synchronous file read 'readFileSync'
try {
  const data = fs.readFileSync("example-sync.txt", "utf8");
  console.log("File content:", data);
} catch (err) {
  console.error("Error reading file:", err);
}
console.log("This prints after the file is read!");

console.log("------------------------------------------------------");
// asynchronous file read 'readFile
fs.readFile("example-async.txt", "utf8", (error, data2) => {
  // callback function is given and called so that after it
  // finishes the task (reading the file) it gives us the result
  // cause it doesnt block the whole code.
  if (error) {
    console.log("Error: ", error);
    return;
  } else {
    console.log("File content:", data2);
  }
});
console.log("This prints while the file is still being read!");
