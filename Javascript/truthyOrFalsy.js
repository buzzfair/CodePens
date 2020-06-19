// Write your function here:

/*
failed attempt number 1
function truthyOrFalsy() {
  if (0 || null || false || NaN || '' || "" || undefined) {
  return false;
    } else {
      return true;
    }
*/

//successful attempt, mine
const truthyOrFalsy= value => {
  if (value = false) {
    return false;
  } else {
    return true;
  }
}

//alternate, shorter expression posted in the exercise forum
function truthyOrFalsy(value){
  return value ? true : false;
}

//yet another version that works, from the forum
const truthyOrFalsy = (anyValue) => {
anyValue = anyValue ? true: false;
return anyValue
}

// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(0)) // Should print false

// We encourage you to add more function calls of your own to test your code!

//





