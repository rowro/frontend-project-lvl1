import GameEngine from './GameEngine.js';
import { calcExpression, randomMathOperation, randomNumber } from '../index.js';

class BrainCalc extends GameEngine {
  writeRandomExpression() {
    const numberOne = randomNumber();
    const numberTwo = randomNumber();
    const operation = randomMathOperation();
    console.log(`Question: ${numberOne} ${operation} ${numberTwo}`);
    this.correctAnswer = calcExpression(numberOne, operation, numberTwo);
  }

  askExpression() {
    this.writeRandomExpression();
    super.checkAnswer(this.correctAnswer, () => this.askExpression());
  }

  start() {
    super.start();

    console.log('What is the result of the expression?');
    super.nextRound(() => this.askExpression());
  }
}

export default BrainCalc;
