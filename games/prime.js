import startGame from '../src/index.js';
import generateRandomInteger from '../src/utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const prime = () => {
  const makePrimeGame = () => {
    const question = generateRandomInteger(0, 9);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };

  startGame(description, makePrimeGame);
};

export default prime;
