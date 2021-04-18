import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const correctAnswerMessage = () => console.log('Correct!');

export const wrongAnswerMessage = (wrongAnswer, correctAnswer) => {
  console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};
