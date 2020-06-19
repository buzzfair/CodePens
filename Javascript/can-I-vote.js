// Write your function here:

const canIVote = age => {
    if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

//alternate way to express
function canIVote(age) {
  return (age >= 18 ? true : false);
}


//yet another way to write this function
const canIVote = age => age >= 18;


// Uncomment the line below when you're ready to try out your function
console.log(canIVote(19)) // Should print true

// We encourage you to add more function calls of your own to test your code!
