import startGame from '../src/index.js';
import generateRandomInteger from '../src/utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const expressionCreator = () => generateRandomInteger(1, 9);

  const expressionSolver = (expression) => {
    const number = Number(expression);
    return isPrime(number) ? 'yes' : 'no';
  };

  startGame(description, expressionCreator, expressionSolver);
};

export default prime;
