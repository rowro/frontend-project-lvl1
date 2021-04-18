import GameEngine from './GameEngine.js';
import { randomNumber, arithmeticProgression } from '../index.js';

class BrainProgression extends GameEngine {
  askQuestion() {
    const start = randomNumber(1, 5);
    const step = randomNumber(1, 5);
    const length = 10;
    const index = randomNumber(0, length);

    const progression = arithmeticProgression(start, step, length);
    const correctAnswer = progression[index];

    progression[index] = '..';
    console.log(`Question: ${progression.join(' ')}`);

    super.checkAnswer(correctAnswer, () => this.askQuestion());
  }

  start() {
    super.start();

    console.log('What number is missing in the progression?');
    super.nextRound(() => this.askQuestion());
  }
}

export default BrainProgression;
