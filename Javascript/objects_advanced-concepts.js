//this keyword: refers to the object it belongs to
//In a method, this refers to the owner object.
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore

const robot = {
// Step 1 create 2 key-value pairs in obj robot
  model: '1E78V2',
  energyLevel: 100,
// Step 2 create method and return requested string using interpolation and this keyword 
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
// Step 3 log result of method
console.log(robot.provideInfo());

//this keyword and functions
// ! AVOID using arrow functions which will return undefined !
const robot = {
  energyLevel: 100,
  checkEnergy: function() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

//privacy and the underscore in objects
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
// step 1 reassign value of _energyLevel to 'high'
robot._energyLevel = 'high';

// step 2 call .recharge() to find out what happens to this method as a result of step 1
robot.recharge();
// output: Recharged! Energy is currently at high30%. (a side effect of type-coercion)

//getters and the get keyword
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
// To call the getter method: 
person.fullName; // 'John Doe'

//getter exercises
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
// Steps 1 and 2 create getter method to check if energyLevel is a number, return appropriate string when true
  get energyLevel() {
    if (typeof this._energyLevel === `number`) {
      return `My current energy level is ${this._energyLevel}`;
 // Step 3 add else statement when condition evals to false
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
   }
};
// step 4 log result of calling getter method to console
console.log(robot.energyLevel)

//setters and the set keyword
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
//NOTE even w/ setter method, still possible to directly reassign properties
person._age = 'forty-five'
console.log(person._age); // Prints forty-five

//setter exercises
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
set numOfSensors(num) {
  if (typeof num === 'number' && num >= 0){
    this._numOfSensors = num;
  } else {
    return 'Pass in a number that is greater than or equal to 0';
  }
}
};

robot.numOfSensors = 100
console.log(`Number of Sensors is ${robot.numOfSensors}`);

//factory functions are used to create mulitple instances of objects quickly and on a massive scale
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

//factory function exercise
// Step 1 make factory function to make robots
const robotFactory = (model,mobile) => {
return {
  model: model,
  mobile: mobile,
  beep() {
    console.log('Beep Boop')
  }
}
};
// Step 2 declare variable, assign arguments to create an object with values
const tinCan = robotFactory('P-500',true);
// Step 3 call beep method on obj created in Step 2
tinCan.beep();

//property value shorthand
//destructuring: shortcut for assigning properties to variables
const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};
//above is same as below - below employs destructuring
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
//exercise
//use property value shorthand and refactor factory function
function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

//destructured assignment
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
//exercise
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
// Step 1 use destructured assignment to create variable that extracts functionality property of robot obj
const { functionality } = robot;
// Step 2 call the robot's beep method functionality based on the variable created in Step 1
functionality.beep();

//Built-in object methods 
//exercises
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call? It was the name of the object (robot) that was needed as an argument because Object.keys(obj) takes an object as a parameter
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line that will return more arrays that have both key and value of the properties
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line. Syntax is: const returnedTarget = Object.assign(target, source);
const targetRobot = {laserBlaster: true, voiceRecognition: true};
const newRobot = Object.assign(targetRobot,robot);

console.log(newRobot);