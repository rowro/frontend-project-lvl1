import GameEngine from './GameEngine.js';
import { calcExpression, randomMathOperation, randomNumber } from '../index.js';

class BrainCalc extends GameEngine {
  askQuestion() {
    const numberOne = randomNumber();
    const numberTwo = randomNumber();
    const operation = randomMathOperation();
    const correctAnswer = calcExpression(numberOne, operation, numberTwo);

    console.log(`Question: ${numberOne} ${operation} ${numberTwo}`);

    super.checkAnswer(correctAnswer, () => this.askQuestion());
  }

  start() {
    super.start();

    console.log('What is the result of the expression?');
    super.nextRound(() => this.askQuestion());
  }
}

export default BrainCalc;
