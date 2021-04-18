import { randomNumber, gcd } from '../helpers.js';
import { checkAnswer, startGame } from '../index.js';

const askQuestion = () => {
  const numberOne = randomNumber();
  const numberTwo = randomNumber();
  const correctAnswer = gcd(numberOne, numberTwo);

  console.log(`Question: ${numberOne} ${numberTwo}`);

  checkAnswer(correctAnswer, askQuestion);
};

export default () => startGame('Find the greatest common divisor of given numbers.', askQuestion);
