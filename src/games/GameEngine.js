import readlineSync from 'readline-sync';
import {
  correctAnswerMessage, greeting, wrongAnswerMessage,
} from '../cli.js';

class GameEngine {
  constructor() {
    this.name = '';
    this.currentRound = 0;
    this.maxRounds = 3;
    this.correctAnswer = null;
  }

  checkAnswer(correctAnswer, callback) {
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) === String(correctAnswer)) {
      correctAnswerMessage();
      this.nextRound(callback);
    } else {
      wrongAnswerMessage(userAnswer, correctAnswer);
      this.gameOver();
    }
  }

  nextRound(callback) {
    if (this.currentRound < this.maxRounds) {
      this.currentRound += 1;
      callback();
    } else {
      this.winGame();
    }
  }

  winGame() {
    console.log(`Congratulations, ${this.name}!`);
  }

  gameOver() {
    console.log(`Let's try again, ${this.name}!`);
  }

  start() {
    console.log('Welcome to the Brain Games!');
    this.name = greeting();
  }
}

export default GameEngine;
