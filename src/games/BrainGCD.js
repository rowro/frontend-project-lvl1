import GameEngine from './GameEngine.js';
import { randomNumber, gcd } from '../index.js';

class BrainGCD extends GameEngine {
  askQuestion() {
    const numberOne = randomNumber();
    const numberTwo = randomNumber();
    const correctAnswer = gcd(numberOne, numberTwo);

    console.log(`Question: ${numberOne} ${numberTwo}`);

    super.checkAnswer(correctAnswer, () => this.askQuestion());
  }

  start() {
    super.start();

    console.log('Find the greatest common divisor of given numbers.');
    super.nextRound(() => this.askQuestion());
  }
}

export default BrainGCD;
