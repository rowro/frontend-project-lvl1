export const randomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

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
