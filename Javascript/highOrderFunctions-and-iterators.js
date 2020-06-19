/*
In JavaScript, functions are a data type 
just as strings, numbers, and arrays are 
data types. Therefore, functions can be 
assigned as values to variables, but are 
different from all other data types 
because they can be invoked.
*/

//function assigned to variable
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

//.forEach method - each of the following bits of code 
// will produce the same result!

const groceries = ['brown sugar','salt','cranberries','walnuts'];

// ..this way..
groceries.forEach(function(groceryItem) {
	console.log(' - ' + groceryItem);
});

// ..or..
groceries.forEach(groceryItem => console.log(groceryItem));

// ..or..
function printGrocery(element){
  console.log(element);
}
groceries.forEach(printGrocery);


//.map method
const numbers = [1, 2, 3, 4, 5]; 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => {
  return animal[0];
});
console.log(secretMessage.join(''));


const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
});
console.log(smallNumbers.join(' '));


//.filter method
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
const shortWords = words.filter(word => {
  return word.length < 6;
});
console.log(shortWords.join(' '));