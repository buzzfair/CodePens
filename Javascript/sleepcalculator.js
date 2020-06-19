/*log sleeps hours per day by creating 
a concise body arrow function using day as a parameter*/
const getSleepHours = day => {
 if (day === 'monday') {
   return 8;
 } else if (day === 'tuesday') {
    return 7;
 } else if (day === 'wednesday') {
    return 8.5;
 } else if (day === 'thursday') {
    return 9;
 } else if (day === 'friday') {
    return 7.5;
 } else if (day === 'saturday') {
    return 6.5;   
 } else if (day === 'sunday') {
    return 7.25;
 }
}
/*
testing testing testing
console.log(getSleepHours('friday'))
*/

//concise body arrow function with single-line block, elminates need for if..else, curly brackets and return statement
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}


console.log('You g0t ' + getActualSleepHours() + ' hours of sleep this week.');
console.log('Ideally you want to get ' + getIdealSleepHours() + ' hours of sleep every week.');


const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepDeficit = idealSleepHours - actualSleepHours;
  if (actualSleepHours === idealSleepHours) {
  console.log('You got the perfect amount of sleep this week');
  } 
  else if (actualSleepHours > idealSleepHours) {
  console.log(`You got ${sleepDeficit} hours more sleep than you need.`);
  } 
  else {
  console.log(`You got ${sleepDeficit} less hours sleep than you need.`);
  }
}
calculateSleepDebt();
