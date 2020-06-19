// Write your function here:

function lifePhase(age) {
    if (age < 0 || age > 140) {
    return 'This is not a valid age'
  } else if (age < 3) {
    return 'baby';
  } else if (age < 13) {
    return 'child';
  } else if (age < 20) {
    return 'teen';
  } else if (age < 65) {
    return 'adult';
  } else {
    return 'senior citizen'
    }
}
  


// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!