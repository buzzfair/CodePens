//to calculate my age in dog years, starting variable will be my current age
let myAge = 49;
//creating var earlyYears for calculating purposes
let earlyYears = 2;
//earlyYears *= 10.5; written without the assignment operator
earlyYears = earlyYears * 10.5;
//already accounted for earlyYears, so subtract 2 from myAge
let laterYears = myAge - 2;
//laterYears *= 4; written without the assignment operator
laterYears = laterYears * 4;
console.log(earlyYears);
console.log(laterYears);
//add earlyYears and laterYears together to get my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
//write my name as string with all lowercase letters using built-in method  
const myName = 'Guin'.toLowerCase();
//statement using string interpolation to display my name, my age and my age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
