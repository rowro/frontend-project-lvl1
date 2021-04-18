#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

class BrainEven {
  constructor() {
    this.name = '';
    this.currentNumber = null;
    this.correctAnswerCount = 0;
    this.winCount = 3;

    this.start();
  }

  writeRandomNumber() {
    const max = 100;
    const min = 0;
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    console.log(`Question: ${randomNumber}`);

    this.currentNumber = randomNumber;
  }

  checkNumber() {
    const isEven = this.currentNumber % 2 === 0;
    const answer = readlineSync.question('Your answer: ');
    switch (answer) {
      case 'yes':
        if (isEven) {
          console.log('Correct!');
          this.askNumber();
        } else {
          console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
          this.gameOver();
        }
        break;

      case 'no':
        if (!isEven) {
          console.log('Correct!');
          this.askNumber();
        } else {
          console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
          this.gameOver();
        }
        break;

      default:
        break;
    }
  }

  askNumber() {
    if (this.correctAnswerCount < this.winCount) {
      this.correctAnswerCount += 1;
      this.writeRandomNumber();
      this.checkNumber();
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

  async start() {
    console.log('Welcome to the Brain Games!');
    this.name = await greeting();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    this.askNumber();
  }
}

const game = new BrainEven();
