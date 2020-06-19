//recreating the Lodash library capstone project

const _ = {
  clamp (number, lower, upper) {
    let lowerClamp = Math.max(number, lower);
    let clampedNumber = Math.min(lowerClamp, upper);
    return clampedNumber;
  },
  inRange (number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let numInRange = number >= start && number < end;
    return numInRange;
  },
  words (string) {
    let wordArr = string.split(' ');
    return wordArr;
  },
  pad (string, length) {
    if (length <= string.length) {
      return string;
    }
    const startPadLength = Math.floor((length - string.length) / 2);
    const endPadLength = length - string.length - startPadLength;
    const paddedString = ' '.repeat(startPadLength) + string + ' '.repeat(endPadLength);
    return paddedString;
  },
// .has() takes object & key as params, checks if object contains value at specified key, returns true or false, 
  has (object, key) { 
//    return object[key] === undefined ?;
    if (hasValue === undefined) {
      return false; 
    } return true;
      return hasValue;
  },
 // .invert() iterates through key:value pairs of an object and swaps (inverts) keys and values, and then returns a new object 
 // .invert() iterates through key:value pairs of an object and swaps (inverts) keys and values, and then returns a new object 
  invert (object) {
    let invertedObject = {}; //declare empty object which will be the inverted object that is returned
    let originalValue; //initialize variable ... why??? IDK
    for (let key in object) {  // iterate through the provided object's keys - Q: why don't we express as [key,value] since the exercise specifies key/value pairs to be inverted?
      originalValue = object[key]; // assigned the initalized variable the value of the provided object's key
      invertedObject[originalValue] = key; // assign to the object's key the value of key (WHAT???? what does this do? How does this 'invert' anything?) 
    }
    return invertedObject; // return the "new" inverted object
  }
};

     // .invert() iterates through key:value pairs of an object and swaps (inverts) keys and values, and then returns a new object 
//   invert (object) {
//     let newObj = {};
//    for ([key,value] in object) {
//     let key = temp;
//     let value = key;
//     let temp = value;
//     return newObj{ key : value};
//     }
//   } 
// };
// drop creates "slice" of array with n (number) of elements dropped from beginning, takes 2 params: array, number; and returns new array containing new elements excl. number of elements from beginning
  drop(array, number) {
    if (number===undefined) {
      number = 1; } 
      let droppedArray = array.slice(number);
      return droppedArray;
  },
// dropWhile creates "slice" of array excl. elements dropped from beginning; elements are dropped until predicate returns falsey, method takes two params: (array, predicate function), and predicate is invoked with three: (value, index, array)
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex(function(element, index) {
      return !predicate(element, index, array)
     })
    let droppedArray = this.drop(array,dropNumber);
    return droppedArray; // returns new array
  },
    // chuck creates an array of elements split into groups length of (size), if array can't be split evenly final chunk will be remaining elements
  chunk(array,size) {
    if (size === undefined) {
      size = 1;
    }
    let chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i+size)
      chunkedArr.push(arrayChunk)
    } 
    return chunkedArr
  }
};






// Do not write or modify code below this line.
module.exports = _;