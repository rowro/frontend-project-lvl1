export const randomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;

export const isEven = (num) => num % 2 === 0;

export const randomMathOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[randomNumber(0, 3)];
};

export const calcExpression = (a, operation, b) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

export const gcd = (numberOne, numberTwo) => {
  let a = numberOne >= numberTwo ? numberOne : numberTwo;
  let b = numberOne >= numberTwo ? numberTwo : numberOne;
  let remainder = a % b;

  while (remainder > 0) {
    a = b;
    b = remainder;
    remainder = a % b;
  }

  return b;
};

export const arithmeticProgression = (start, step, length = 10) => {
  const result = [start];

  while (result.length < length) {
    result.push(result[result.length - 1] + step);
  }

  return result;
};

export const isPrime = (num) => {
  if (num <= 1) return false;

  let divisor = num - 1;
  while (divisor > 1) {
    if (num % divisor === 0) {
      return false;
    }

    divisor -= 1;
  }

  return true;
};
