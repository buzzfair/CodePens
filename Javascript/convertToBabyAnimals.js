// Write function that take array as argument and, using a loop, returns new array with each string in array prepended with 'baby'
const convertToBaby = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
     newArray.push(`baby ${arr[i]}`);
  }
  return newArray;
};








// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

// Output: [ 'baby panda',
//  'baby turtle',
//  'baby giraffe',
//  'baby hippo',
//  'baby sloth',
//  'baby human' ]