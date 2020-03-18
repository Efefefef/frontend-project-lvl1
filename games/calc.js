import { greetUser, startGame, initiateGame } from '../src/index.js';

const calc = () => {
  const text = 'What is the result of the expression?';

  const generateRandomInteger = () => Math.floor(Math.random() * 10);

  const expressionCreator = () => `${generateRandomInteger()} + ${generateRandomInteger()}`;

  const expressionSolver = (expression) => {
    const array = expression.split(' ');
    return String(Number(array[0]) + Number(array[2]));
  };

  greetUser();
  initiateGame();
  startGame(text, expressionCreator, expressionSolver);
};

export default calc;
