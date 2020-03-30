import playGame from '../src/index.js';
import generateRandomInteger from '../src/utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const makePrimeGame = () => {
  const question = generateRandomInteger(0, 9);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGame = () => playGame(description, makePrimeGame);

export default startPrimeGame;
