import { randomNumber, isPrime } from '../helpers.js';
import { checkAnswer, startGame } from '../index.js';

const askQuestion = () => {
  const number = randomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);

  checkAnswer(correctAnswer, askQuestion);
};

export default () => startGame('Answer "yes" if given number is prime. Otherwise answer "no".', askQuestion);
