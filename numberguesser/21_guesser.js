const prompt = require('prompt-sync')({ eot: true, sigint: true });

const guessArr = [];
let answer = 0;
let foundCorrectNumber = false;

/* eslint-disable no-param-reassign */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function generateResponse(guess, number) {
  if (!Number.isNaN(Number(guess))) {
    if (guessArr.includes(guess)) {
      return 'Already Guessed!';
    }
    if (guess > number) {
      guessArr.push(guess);
      return 'Too High!';
    }
    if (guess < number) {
      guessArr.push(guess);
      return 'Too Low!';
    }
  } else {
    return 'Not a number! Try again!';
  }
  foundCorrectNumber = true;
  return `You got it! You took ${guessArr.length + 1} attempts!`;
}

const number = getRandomInt(1, 100);
console.log(number);

while (!foundCorrectNumber) {
  answer = prompt('Guess a number: ');
  console.log(generateResponse(answer, number, guessArr));
}
