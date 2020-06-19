// Write a function that takes in an array and returns a new array without using .reverse() method
reverseArray = (array) => {
  i = 0;
  while (i < array.length - 1) {
  array.splice(i, 0, array.pop());
    i++;
  };
  return array;
};







// When you're ready to test your code, uncomment the below and run:
 
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
