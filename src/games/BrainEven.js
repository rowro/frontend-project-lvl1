import { randomNumber, isEven } from '../helpers.js';
import { checkAnswer, startGame } from '../index.js';

const askQuestion = () => {
  const number = randomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);

  checkAnswer(correctAnswer, askQuestion);
};

export default () => startGame('Answer "yes" if the number is even, otherwise answer "no".', askQuestion);
