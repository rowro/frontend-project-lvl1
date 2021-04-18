import { calcExpression, randomMathOperation, randomNumber } from '../helpers.js';
import { checkAnswer, startGame } from '../index.js';

const askQuestion = () => {
  const numberOne = randomNumber();
  const numberTwo = randomNumber();
  const operation = randomMathOperation();
  const correctAnswer = calcExpression(numberOne, operation, numberTwo);

  console.log(`Question: ${numberOne} ${operation} ${numberTwo}`);

  checkAnswer(correctAnswer, askQuestion);
};

export default () => startGame('What is the result of the expression?', askQuestion);
