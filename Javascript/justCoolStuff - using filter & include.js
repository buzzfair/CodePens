// Write a function that takes in two arrays and then uses the built-in .filter() method to return an array with the items that are present in both arrays.
const justCoolStuff = (arr1,arr2) => {
//  let newCoolStuff = [];
  return arr1.filter(x => arr2.includes(x)); 
};






// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

