const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write function that takes in array of strings and using .forEach(), loops through each element and calls politelyDecline() with each

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};

declineEverything(veggies);

//Write function that takes array of strings and loops through each element and accepts each of them by logging a string literal to the console

const acceptEverything = (arr) => {
 for (const i of arr) {
   console.log(`Ok, I guess I will eat some ${i}.`);
 }
}

acceptEverything(veggies);