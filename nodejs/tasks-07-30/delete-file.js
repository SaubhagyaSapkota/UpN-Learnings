const fs = require("fs");

fs.unlink("deleteOutput.txt", (err) => {
  if (err) console.log(err);
  else {
    console.log("\nDeleted file: deleteOutput.txt");
  }
});

