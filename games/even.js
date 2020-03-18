import { greetUser, startGame, initiateGame } from '../src/index';

const even = () => {
  const text = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRandomInteger = () => Math.floor(Math.random() * 10);

  const expressionCreator = generateRandomInteger;

  const expressionSolver = (integer) => (integer % 2 === 0 ? 'yes' : 'no');

  greetUser();
  initiateGame();
  startGame(text, expressionCreator, expressionSolver);
};

export default even;
