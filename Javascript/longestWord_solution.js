//finds the longest word in an array

import { subsequences, stringSequence } from 'subsequence.words';
function longestWord(array, word, ___) {
  let longestString = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }
  return longestString;
};
console.log(stringSequence);
console.log(subsequences);
console.log(longestWord(subsequences, ___));
