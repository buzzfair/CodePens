let userName = 'Guin';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will I make a million dollars this year?';
console.log(`You have asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Outlook hazy try again';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
    break;
  case 8:
    eightBall = 'Signs point to yes';
    break;
default:
    eightBall = 'Invalid question';
    break;        
}
console.log(`The Magic Eight Ball\'s answer: ${eightBall}`)
