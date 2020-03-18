import { greetUser, startGame, initiateGame } from '../src/index.js';

const prime = () => {
  const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRandomInteger = () => Math.floor(Math.random() * 9) + 1;

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const expressionCreator = () => `${generateRandomInteger()}`;

  const expressionSolver = (expression) => {
    const number = Number(expression);
    return isPrime(number) ? 'yes' : 'no';
  };

  greetUser();
  initiateGame();
  startGame(text, expressionCreator, expressionSolver);
};

export default prime;
