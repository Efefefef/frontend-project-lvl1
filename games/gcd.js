import startGame from '../src/index.js';
import generateRandomInteger from '../src/utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const calcGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return calcGcd(b, a % b);
};

const gcd = () => {
  const makeGcdGame = () => {
    const firstInteger = generateRandomInteger(1, 49);
    const secondInteger = generateRandomInteger(1, 49);
    const question = `${firstInteger} ${secondInteger}`;
    const answer = String(calcGcd(firstInteger, secondInteger));
    return [question, answer];
  };

  startGame(description, makeGcdGame);
};

export default gcd;
