const getUserChoice = userInput => {
  userInput = userInput.toLowerCase (); 
  if (userInput === 'bomb' || userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput; 
  } 
  else {
    console.log('Invalid choice. Input either rock, paper, or scissors.');
  }
}
//console.log(getUserChoice('PAPER'));
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};
/*console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());*/

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Game over! Human takes all with the BOMB!';
  } 
  if (userChoice === computerChoice) {
    return 'You chose the same. Game was a tie!';
  }
  if (userChoice === 'rock') { 
    if (computerChoice === 'paper') {
      return 'Computer won this round.';
    } else {
      return 'Human won this round.';
    } 
  }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won.';
      } else {
          return 'Human won.';
      }
    }
      if (userChoice === 'scissors') {
          if (computerChoice === 'rock') {
            return 'Computer dominated!';
          } else {
            return 'Human got this one!';
          }
        }
      }
  

/*console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'paper'));  
console.log(determineWinner('paper', 'scissors'));*/

function playGame() {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log('Human chose: ' + userChoice);
  console.log('Computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();

