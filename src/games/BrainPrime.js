import GameEngine from './GameEngine.js';
import { randomNumber, isPrime } from '../index.js';

class BrainPrime extends GameEngine {
  askQuestion() {
    const number = randomNumber();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);

    super.checkAnswer(correctAnswer, () => this.askQuestion());
  }

  start() {
    super.start();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    super.nextRound(() => this.askQuestion());
  }
}

export default BrainPrime;
