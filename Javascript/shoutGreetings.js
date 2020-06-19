// Write a function that takes an array of strings and returns a new array which should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end, i.e., 'heya' will become 'HEYA!'

const shoutGreetings = arr => {
  let newArray = [];
  arr.map(function(element) {
  newArray.push(element.toUpperCase() + "!");
}); return newArray;
};







// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]