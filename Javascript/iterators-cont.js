//iterators continued
//.findIndex method

//will return the index of the 
//first element which evals to true
const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen); // Output: 3 
console.log(jumbledNums[3]); // Output: 5

//If there isn’t a single element in the array 
//that satisfies the condition in the callback, 
//then .findIndex() will return -1.
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
console.log(greaterThan1000); // Output: -1


const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(animals); // Output: ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant']
console.log(foundAnimal);// Output: 7

//.some method 
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some((word) => {
  return word.length < 6;
})); // Output: true

const interestingWords = words.filter( word => {
  return word.length > 5; 
})


console.log(interestingWords.every((word) => {
  return word.length > 5;
 } )); // Output: false


const startsWithS = animals.findIndex(sanimal => {
  return sanimal[0] === 's'
});
console.log(startsWithS);
console.log(animals[startsWithS]);


//.reduce method returns a single value, reducing the array -- if array is all numbers, reduce adds them all together
//takes a callback function with two parameters (accumulator, currentValue), as arguments
// accumulator starts as value of 1st element in array
// then accumulator becomes value returned by last iteration aka "return value"
// and currentValue is current element

const arrayOfNumbers = [1, 2, 3, 4];
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});
console.log(sum); // Output: 10

//.reduce can also take an option 2nd param for accumulator
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
console.log(summedNums); // Output: 117

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator,currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;  
}, 10);
console.log('The sum of newNumbers is ' + newSum);

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some((word) => {
  return word.length < 6;
})); 
// Output: true

const interestingWords = words.filter( word => {
  return word.length > 5; 
})
console.log(interestingWords.every((word) => {
  return word.length > 5;
 } )); 
 // Output: true

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word)

const nums = [1, 50, 75, 200, 350, 525, 1000];

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);