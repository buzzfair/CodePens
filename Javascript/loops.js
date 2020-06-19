//for loops
for (let i = 5; i < 11; i ++) {
  console.log(i);
}

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}


//for loops - looping through arrays
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i ++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}


//nested loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

let bobsFollowers = ['Apple', 'Amazon', 'Microsoft', 'Tesla'];
let tinasFollowers = ['Apple', 'Tesla', 'Netflix'];
let mutualFollowers = [];
  for (let i = 0; i < bobsFollowers.length; i ++) {
    for (let j = 0; j < tinasFollowers.length; j ++) {
      if (bobsFollowers[i] === tinasFollowers[j]) {
        mutualFollowers.push(bobsFollowers[i]);
      }
    } 
  }


//while loops
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


//do...while loops
const cupsOfSugarNeeded = 2;
let cupsAdded = 0;
do {
  cupsAdded = 1; 
  cupsAdded ++
} while (cupsAdded < cupsOfSugarNeeded);


//break keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  console.log('And if you don\'t know, now you know.');
    if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
for (let i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i]);
  console.log('Check me off and go to the next item.');
    if (groceryList[i] === "pasta") {
    break;
  }
}

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
console.log('Orange you glad I broke out the loop!');