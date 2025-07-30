
const fs = require("fs");

file_descriptor = fs.openSync("closeOutput.txt");
console.log("The file descriptor is:", file_descriptor);

fs.close(file_descriptor, (err) => {
  if (err) console.error("Failed to close file", err);
  else {
    console.log("\n> File Closed successfully");
  }
});
