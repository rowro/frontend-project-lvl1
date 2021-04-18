import { randomNumber, arithmeticProgression } from '../helpers.js';
import { checkAnswer, startGame } from '../index.js';

const askQuestion = () => {
  const start = randomNumber(1, 5);
  const step = randomNumber(1, 5);
  const length = 10;
  const index = randomNumber(0, length);

  const progression = arithmeticProgression(start, step, length);
  const correctAnswer = progression[index];

  progression[index] = '..';
  console.log(`Question: ${progression.join(' ')}`);

  checkAnswer(correctAnswer, askQuestion);
};

export default () => startGame('What number is missing in the progression?', askQuestion);
