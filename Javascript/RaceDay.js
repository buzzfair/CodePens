let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 8;

if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly === true) {
  console.log(`Your race starts at 9:30am, and your race number is ${raceNumber}. Good luck!`);
} else if (age > 18 && registeredEarly === false) {
  console.log(`Your race starts at 11:00am, and your race number is ${raceNumber}. Now go relax!`);
} else if (age < 18) {
  console.log(`Your race starts at 12:30pm, and your race number is ${raceNumber}. Have fun and best of luck!`);
} else {
  console.log('You\'re 18, so please proceed to the registration desk for your race time and number assignments. Thank you!')
}

