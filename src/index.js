import readlineSync from 'readline-sync';
import {
  correctAnswerMessage, greeting, wrongAnswerMessage,
} from './cli.js';

let name = '';
let currentRound = 0;
const MAX_ROUNDS = 3;

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  name = greeting();
};

export const winGame = () => {
  console.log(`Congratulations, ${name}!`);
};

export const gameOver = () => {
  console.log(`Let's try again, ${name}!`);
};

export const nextRound = (callback) => {
  if (currentRound < MAX_ROUNDS) {
    currentRound += 1;
    callback();
  } else {
    winGame();
  }
};

export const checkAnswer = (correctAnswer, callback) => {
  const userAnswer = readlineSync.question('Your answer: ');
  if (String(userAnswer) === String(correctAnswer)) {
    correctAnswerMessage();
    nextRound(callback);
  } else {
    wrongAnswerMessage(userAnswer, correctAnswer);
    gameOver();
  }
};

export const startGame = (termsMessage, callback) => {
  hello();

  console.log(termsMessage);
  nextRound(callback);
};
