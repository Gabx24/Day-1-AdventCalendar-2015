const fs = require("fs");

//1 - What floor does Santa ends up on
// ( --> should go up one floor
// ) --> should go down one floor

function question1() {
  fs.readFile("./santa.txt", (err, data) => {
    console.time("santa-time");
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return (acc += 1);
      } else if (currentValue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd("santa-time");
    console.log("The floor Santa ends up on:", answer);
  });
}

question1();

//2 - When does Santa first enters the basement

function question2() {
  fs.readFile("./santa.txt", (err, data) => {
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
      if (currentItem === "(") {
        accumulator += 1;
      } else if (currentItem === ")") {
        accumulator -= 1;
      }
      counter++;
      return accumulator < 0;
    });

    console.log(
      "The position of the character that causes Santa to first enter the basement: ",
      counter
    );
  });
}
question2();
