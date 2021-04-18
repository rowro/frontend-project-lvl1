import GameEngine from './GameEngine.js';
import { randomNumber, isEven } from '../index.js';

class BrainEven extends GameEngine {
  writeRandomNumber() {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    this.correctAnswer = isEven(number) ? 'yes' : 'no';
  }

  askNumber() {
    this.writeRandomNumber();
    super.checkAnswer(this.correctAnswer, () => this.askNumber());
  }

  start() {
    super.start();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    super.nextRound(() => this.askNumber());
  }
}

export default BrainEven;
