const mathlib = require("../randomNumbers/math");
const jokeslib = require("./randomNumbers/generateJokes/index");

let app = {};

app.printRandomJokes = () => {
  let allJokes = jokeslib.allJokes();

  let jokesLength = allJokes.length;
  
  let randomIndex = mathlib.getRandomNumbers(1, jokesLength);
//   console.log(allJokes[randomIndex]);

  let selectedJoke = allJokes[randomIndex - 1];
  console.log(selectedJoke);
//   return selectedJoke;
};

app.printRandomJokes();
