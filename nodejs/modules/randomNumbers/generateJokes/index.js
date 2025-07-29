const fs = require("fs")

let jokes={}

jokes.allJokes = () => {
    let readJokesFromTxtFile = fs.readFileSync(__dirname+"/jokes.txt", "utf-8")
    console.log(readJokesFromTxtFile)
}

module.exports = jokes;
jokes.allJokes()