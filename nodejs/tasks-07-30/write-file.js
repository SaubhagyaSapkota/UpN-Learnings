const fs= require("fs")

data= "Hi i am saubhagya sapkota. An intern at Upachaar Nepal"
fs.writeFile("writeOutput.txt", data, "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully!");
});
