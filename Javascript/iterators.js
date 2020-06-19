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