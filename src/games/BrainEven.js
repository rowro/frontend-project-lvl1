import GameEngine from './GameEngine.js';
import { randomNumber, isEven } from '../index.js';

class BrainEven extends GameEngine {
  askQuestion() {
    const number = randomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);

    super.checkAnswer(correctAnswer, () => this.askQuestion());
  }

  start() {
    super.start();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    super.nextRound(() => this.askQuestion());
  }
}

export default BrainEven;
