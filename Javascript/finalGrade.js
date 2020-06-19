// Write your function here:

const finalGrade = (num1,num2,num3) => {
  const avg = (num1 + num2 + num3) / 3;
  if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) {
    return 'You have entered an invalid grade.';
      }
   else if (avg < 60) {
    return 'F';
  } else if (avg < 70) {
    return 'D';
  } else if (avg < 80) {
    return 'C';
  } else if (avg < 90) {
    return 'B';
  } else {
    return 'A';
    }
  }  





// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!