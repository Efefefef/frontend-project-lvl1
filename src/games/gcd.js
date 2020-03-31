import playGame from '../index.js';
import generateRandomInteger from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const calcGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return calcGcd(b, a % b);
};

const makeGcdGame = () => {
  const firstInteger = generateRandomInteger(1, 49);
  const secondInteger = generateRandomInteger(1, 49);
  const question = `${firstInteger} ${secondInteger}`;
  const answer = String(calcGcd(firstInteger, secondInteger));
  return [question, answer];
};

const startGcdGame = () => playGame(description, makeGcdGame);

export default startGcdGame;
