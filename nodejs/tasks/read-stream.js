const fs = require("fs");

const stream = fs.createReadStream("file.txt", { encoding: "utf8",highWaterMark:16 });

// highWaterMarks is for setting the chink size

stream.on("data", (chunk) => {
  console.log("-----new chunk-----")
  console.log(chunk)
});

stream.on("end", () => {
  console.log("Finished reading the file.");
});

stream.on("error", (err) => {
  console.error("Error:", err.message);
});
