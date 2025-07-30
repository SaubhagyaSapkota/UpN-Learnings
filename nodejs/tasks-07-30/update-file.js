
var fs = require("fs");
const buf = Buffer.alloc(1024);
console.log("Content of file");

// Opening file
fs.open("updateOutput.txt", "r+", function (err, fd) {
  if (err) {
    return console.error(err);
  }

  // Reading file
  fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
    if (err) {
      console.log(err);
    }

    if (bytes > 0) {
      console.log("Before truncating:");
      console.log(buf.slice(0, bytes).toString());
    }

    // Truncating the file
    fs.truncate("updateOutput.txt", 16, function (err, bytes) {
      if (err) {
        console.log(err);
      }

      // Content after truncating
      console.log("New content of file");
      fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
          console.log(err);
        }

        // Print only read bytes to avoid junk.
        if (bytes > 0) {
          console.log("After truncating:");
          console.log(buf.slice(0, bytes).toString());
        }

        // Close the opened file.
        fs.close(fd, function (err) {
          if (err) {
            console.log(err);
          }
        });
      });
    });
  });
});
