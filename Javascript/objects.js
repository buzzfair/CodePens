// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};

let fasterShip = {
  color: 'silver',
  'Fuel Type': 'Turbo Fuel'
};


//accessing an object's properties
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

//using bracket notation to access properties
//***brackets are REQUIRED for accessing keys with
//numbers, spaces, or special characters in them***
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';
console.log(spaceship[propName]); // output: true

const isActive = spaceship['Active Mission'];

//property assignment
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes value of the type property
spaceship.speed = 'Mach 5'; // Creates new key of 'speed' with value of 'Mach 5'

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold'; // changes value of color property
spaceship.numEngines = 10; // creates new key 'numEngines' w/ value of 10
delete spaceship['Secret Mission']; // removes 'Secret Mission' property

//changing property with the *delete* operator
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};

delete spaceship.mission;  // Removes the mission property

//Methods of objects
const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
}; //creates an 'invade' method on the alienShip object

alienShip.invade(); // invokes the method, prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();
alienShip.takeOff();

//nested objects
//an object might have another object as a property 
//which in turn could have a property that’s 
//an array of even more objects
const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
}; 

//chaining operators to access nested properties
spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

//exercises
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

//step 1 create var, assign captain's 0 index favorite food
const capFave = spaceship.crew.captain['favorite foods'][0];


//step 2 assign passengers an array of objects w/ at least one passenger w/ at least one key-value pair 
spaceship.passengers = [{
  name: 'Dave', 
  type: 'human', 
  job: 'pilot'
  }
  , 
  {
    name: 'Frank', 
    type: 'human', 
    job: 'coPilot'
    }
    ,  
    {
      name: 'Hal9000',
      type: 'computer', 
      job: 'systems'
      }];

//step 3 create var, assign first passenger (0th index) from array created in step 2
let firstPassenger = spaceship.passengers[0];
console.log(firstPassenger); // output: {name: 'Dave', type: 'human', job: 'pilot'}


//Pass by Reference? When we make changes to an object passed into a function, those changes are permanent
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'
//why? function PaintIt permanently changed  color of te spaceship object

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Step 1 create function that has object as param, sets object's 'Fuel Type' ppty to 'avocado oil'
const greenEnergy = objParam1 => {
  objParam1 ['Fuel Type'] = 'avocado oil'
  };

// Step 2 create function that has object as param, sets/reassigns that object's disabled ppty to true
const remotelyDisable = objParam2 => {
  objParam2.disabled = true
};

// Step 3 call (2) functions, then log to console spaceship object
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

//Looping through Objects
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Step 1 interate through spaceship.crew obj using for...in and log list of crew roles and names in requested format
for (let crewMemberRole in spaceship.crew) {
 console.log (`${crewMemberRole}: ${spaceship.crew[crewMemberRole].name}`)
};

// Step 2 iterate through spaceship.crew obj using for...in and log list of crew names and degress in requested format
for (let crewDegree in spaceship.crew) {
  console.log (`${spaceship.crew[crewDegree].name}: ${spaceship.crew[crewDegree].degree}`)
};