import startGame from '../src/index.js';
import generateRandomInteger from '../src/utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const expressionCreator = () => generateRandomInteger(0, 9);

  const isEven = (integer) => integer % 2 === 0;

  const expressionSolver = (integer) => (isEven(integer) ? 'yes' : 'no');

  startGame(description, expressionCreator, expressionSolver);
};

export default even;
