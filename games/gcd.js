import { greetUser, startGame, initiateGame } from '../src/index.js';

const gcd = () => {
  const text = 'Find the greatest common divisor of given numbers.';

  const generateRandomInteger = () => Math.floor(Math.random() * 50);

  const expressionCreator = () => `${generateRandomInteger()} ${generateRandomInteger()}`;

  const expressionSolver = (expression) => {
    const array = expression.split(' ');
    const number1 = Number(array[0]);
    const number2 = Number(array[1]);
    const calcGcd = (a, b) => {
      if (!b) {
        return a;
      }
      return calcGcd(b, a % b);
    };
    const result = calcGcd(number1, number2);
    return String(result);
  };

  greetUser();
  initiateGame();
  startGame(text, expressionCreator, expressionSolver);
};

export default gcd;
