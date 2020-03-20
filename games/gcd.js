import startGame from '../src/index.js';
import generateRandomInteger from '../src/utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const calcGcd = (a, b) => {
    if (!b) {
      return a;
    }
    return calcGcd(b, a % b);
  };

  const expressionCreator = () => `${generateRandomInteger(0, 49)} ${generateRandomInteger(0, 49)}`;

  const expressionSolver = (expression) => {
    const array = expression.split(' ');
    const number1 = Number(array[0]);
    const number2 = Number(array[1]);
    const result = calcGcd(number1, number2);
    return String(result);
  };

  startGame(description, expressionCreator, expressionSolver);
};

export default gcd;
