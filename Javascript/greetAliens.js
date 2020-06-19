// Write function that takes array of strings and uses for loop to print a greeting without using .forEach() method
const greetAliens = (array) => {
  for (let i = 0; i < array.length; i++) {
  console.log("Oh powerful " + array[i] + ", we humans offer our unconditional surrender!");
  }
};



// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
const moreAliens = ["Dick", "Sallie", "Harry", "Tommy"];
greetAliens(aliens);
greetAliens(moreAliens);